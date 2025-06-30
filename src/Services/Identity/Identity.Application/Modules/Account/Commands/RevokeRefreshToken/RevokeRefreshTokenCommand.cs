using BuildingBlock.CQRS;
using BuildingBlocks.Dtos;

namespace Identity.Application.Modules.Account.Commands.RevokeRefreshToken.Login;
public class RevokeRefreshTokenCommand : ICommand<ApiResponse<bool>>
{
    public string RefreshToken { get; set; }
}
