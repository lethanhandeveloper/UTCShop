using BuildingBlock.CQRS;
using BuildingBlocks.Dtos;
using Identity.Application.Dtos;

namespace Identity.Application.Modules.Account.Commands.Login;
public class LoginCommand : ICommand<ApiResponse<UserAccountDto>>
{
    public string UserName { get; set; }
    public string Password { get; set; }
}
