using BuildingBlock.CQRS;
using BuildingBlocks.Enums;
using BuildingBlocks.Exception;
using Identity.Application.Dtos;
using Identity.Application.Interfaces;
using Identity.Domain.Entities;
using Mapster;

namespace Identity.Application.Modules.Account.Commands.Register;
public class RegisterCommandHandler : ICommandHandler<RegisterCommand, UserAccountDto>
{
    private readonly IUnitOfWork _unitOfWork;

    public RegisterCommandHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    //public async Task<UserDto> Handle(CreateAdminCommand request, CancellationToken cancellationToken)
    //{
    //    var isExistedUser = await _userQuery.GetByUserName(request.Email);

    //    if (isExistedUser != null)
    //    {
    //        throw new BadRequestException("The email is already existed");
    //    }

    //    //var user = new UserEntity
    //    //{
    //    //    Name = request.Name,
    //    //    Email = request.Email,
    //    //    HashPassword = BCrypt.Net.BCrypt.HashPassword(request.Password),
    //    //    Age = request.Age,
    //    //    Addresses = request.Addresses
    //    //};

    //    //await _userRepository.CreateAsync(user, cancellationToken);

    //    var role = new UserRoleEntity
    //    {
    //        Type = RoleType.Admin,
    //        //UserId = user.Id,
    //    };

    //    await _roleRepository.CreateAsync(role, cancellationToken);

    //    await _unitOfWork.SaveChangeAsync(cancellationToken);
    //    return request.Adapt<UserDto>();
    //}
    public async Task<UserAccountDto> Handle(RegisterCommand request, CancellationToken cancellationToken)
    {
        var allowAcccountTypes = new List<AccountType>
        {
            AccountType.Customer
        };

        if (!allowAcccountTypes.Contains(request.AccountType))
        {
            throw new BadRequestException("Account type is not valid");
        }

        var user = new UserEntity
        {
            Id = Guid.NewGuid(),
            Name = request.Name,
            Email = request.Email,
            Age = request.Age,
            Addresses = request.Addresses,
            AccountType = request.AccountType,
        };

        await _unitOfWork._userRepository.CreateAsync(user, cancellationToken);

        var account = new AccountEntity
        {
            Id = Guid.NewGuid(),
            UserName = request.UserName,
            Email = request.Email,
            HashPassword = BCrypt.Net.BCrypt.HashPassword(request.Password),
            UserId = user.Id,
            Status = AccountStatus.Inactive,
        };

        await _unitOfWork._accountRepository.CreateAsync(account, cancellationToken);

        var userRole = new UserRoleEntity
        {
            UserId = account.Id
        };

        switch (request.AccountType)
        {
            case AccountType.Customer:
                userRole.Type = RoleType.Customer;
                break;
        }

        await _unitOfWork._userRoleRepository.CreateAsync(userRole, cancellationToken);

        await _unitOfWork.SaveChangeAsync(cancellationToken);

        return request.Adapt<UserAccountDto>();
    }
}
