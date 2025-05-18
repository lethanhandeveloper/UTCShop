using BuildingBlock.CQRS;
using Identity.Application.Dtos;
using Identity.Application.Interfaces.Repositories;
using Identity.Domain.Entities;

namespace Identity.Application.Modules.User.Commands.Register;
public class RegisterUserCommandHandler : ICommandHandler<RegisterUserCommand, UserDto>
{
    private readonly IUserRepository _userRepository;

    public RegisterUserCommandHandler(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<UserDto> Handle(RegisterUserCommand request, CancellationToken cancellationToken)
    {
        var user = new UserEntity
        {
            Name = request.Name,
            Email = request.Email,
            HashPassword = BCrypt.Net.BCrypt.HashPassword(request.Password),
            Age = request.Age,
            Addresses = request.Addresses
        };

        await _userRepository.CreateAsync(user, cancellationToken);

        return new UserDto
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email,
            Age = user.Age,
            Addresses = user.Addresses
        };
    }
}
