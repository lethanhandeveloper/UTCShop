using BuildingBlock.CQRS;
using BuildingBlocks.Dtos;
using User.Application.Dtos;

namespace User.Application.Modules.Commands.Login;
public class LoginUserCommand : ICommand<ApiResponse<UserDto>>
{
    public string Email { get; set; }
    public string Password { get; set; }
}
