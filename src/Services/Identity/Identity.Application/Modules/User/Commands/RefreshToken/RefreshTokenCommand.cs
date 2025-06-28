using BuildingBlock.CQRS;
using BuildingBlocks.Dtos;
using Identity.Application.Dtos;

namespace Identity.Application.Modules.User.Commands.Login;
public class RefreshTokenCommand : ICommand<ApiResponse<UserAccountDto>>
{
    public string RefreshToken { get; set; }
}
