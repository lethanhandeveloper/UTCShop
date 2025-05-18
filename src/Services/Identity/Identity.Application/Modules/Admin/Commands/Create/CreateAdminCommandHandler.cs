using BuildingBlock.CQRS;
using BuildingBlocks.Enums;
using BuildingBlocks.Exception;
using Identity.Application.Dtos;
using Identity.Application.Interfaces;
using Identity.Application.Interfaces.Queries;
using Identity.Application.Interfaces.Repositories;
using Identity.Domain.Entities;
using Mapster;

namespace Identity.Application.Modules.Admin.Commands.Create;
public class CreateAdminCommandHandler : ICommandHandler<CreateAdminCommand, UserDto>
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IUserRepository _userRepository;
    private readonly IRoleRepository _roleRepository;
    private readonly IUserQuery _userQuery;

    public CreateAdminCommandHandler(IUnitOfWork unitOfWork, IUserRepository userRepository, IUserQuery userQuery, IRoleRepository roleRepository)
    {
        _unitOfWork = unitOfWork;
        _userRepository = userRepository;
        _userQuery = userQuery;
        _roleRepository = roleRepository;
    }

    public async Task<UserDto> Handle(CreateAdminCommand request, CancellationToken cancellationToken)
    {
        var isExistedUser = await _userQuery.GetByUserName(request.Email);

        if (isExistedUser != null)
        {
            throw new BadRequestException("The email is already existed");
        }

        var user = new UserEntity
        {
            Name = request.Name,
            Email = request.Email,
            HashPassword = BCrypt.Net.BCrypt.HashPassword(request.Password),
            Age = request.Age,
            Addresses = request.Addresses
        };

        await _userRepository.CreateAsync(user, cancellationToken);

        var role = new RoleEntity
        {
            Name = "Admin",
            Type = RoleType.Admin,
            UserId = user.Id,
        };

        await _roleRepository.CreateAsync(role, cancellationToken);

        await _unitOfWork.SaveChangeAsync(cancellationToken);
        return request.Adapt<UserDto>();
    }
}
