using BuildingBlock.CQRS;
using BuildingBlocks.Dtos;
using Identity.Application.Dtos;

namespace Identity.Application.Modules.User.Commands.Login;
public class LoginUserCommand : ICommand<ApiResponse<UserDto>>
{
    public string Email { get; set; }
    public string Password { get; set; }
}
