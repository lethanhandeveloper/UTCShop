using BuildingBlock.CQRS;
using User.Application.Dtos;
using User.Application.Interfaces.Queries;
using User.Domain;

namespace User.Application.Modules.Commands.Register;
public class RegisterUserCommandHandler : ICommandHandler<RegisterUserCommand, UserDto>
{
    private readonly IUserQuery _userQuery;

    public RegisterUserCommandHandler(IUserQuery userQuery)
    {
        _userQuery=userQuery;
    }

    public async Task<UserDto> Handle(RegisterUserCommand request, CancellationToken cancellationToken)
    {
        var result = await _userQuery.AddAsync(new UserEntity
        {
            Name = request.Name,
            Email = request.Email,
            HashPassword = BCrypt.Net.BCrypt.HashPassword(request.Password),
            Age = request.Age,
            Addresses = request.Addresses
        }, cancellationToken);

        return new UserDto
        {
            Id = result.Id,
            Name = result.Name,
            Email = result.Email,
            Age = result.Age,
            Addresses = result.Addresses
        };
    }
}
