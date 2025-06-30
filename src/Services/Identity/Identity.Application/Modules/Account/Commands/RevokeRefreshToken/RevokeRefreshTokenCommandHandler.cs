using BuildingBlock.CQRS;
using BuildingBlocks.Dtos;
using Identity.Application.Interfaces;
using Identity.Application.Interfaces.Queries;

namespace Identity.Application.Modules.Account.Commands.RevokeRefreshToken.Login;
public class RevokeRefreshTokenCommandHandler : ICommandHandler<RevokeRefreshTokenCommand, ApiResponse<bool>>
{
    private readonly IRefreshTokenQuery _refreshTokenQuery;
    private IUnitOfWork _unitOfWork;

    public RevokeRefreshTokenCommandHandler(IUnitOfWork unitOfWork, IRefreshTokenQuery refreshTokenQuery)
    {

        _unitOfWork = unitOfWork;
        _refreshTokenQuery = refreshTokenQuery;
    }

    public async Task<ApiResponse<bool>> Handle(RevokeRefreshTokenCommand request, CancellationToken cancellationToken)
    {
        await _unitOfWork._refreshTokenRepository.RemoveAsync(request.RefreshToken, cancellationToken);
        await _unitOfWork.SaveChangeAsync(cancellationToken);

        return new ApiResponse<bool> { Success = true };
    }
}
