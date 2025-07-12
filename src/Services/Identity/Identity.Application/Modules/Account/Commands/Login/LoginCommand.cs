using BuildingBlock.CQRS;
using BuildingBlocks.Dtos;
using BuildingBlocks.Enums;
using Identity.Application.Dtos;

namespace Identity.Application.Modules.Account.Commands.Login;
public class LoginCommand : ICommand<ApiResponse<UserAccountDto>>
{
    public string UserName { get; set; }
    public string Password { get; set; }
    public RoleType RoleType { get; set; }
}
