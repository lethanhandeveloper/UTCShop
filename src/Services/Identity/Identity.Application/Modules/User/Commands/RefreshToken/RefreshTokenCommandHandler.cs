using BuildingBlock.CQRS;
using BuildingBlocks.Dtos;
using BuildingBlocks.Enums;
using BuildingBlocks.Exception;
using Identity.Application.Dtos;
using Identity.Application.Interfaces;
using Identity.Application.Interfaces.Queries;
using Identity.Domain.Entities;
using System.Data;

namespace Identity.Application.Modules.User.Commands.Login;
public class RefreshTokenCommandHandler : ICommandHandler<RefreshTokenCommand, ApiResponse<UserAccountDto>>
{
    private readonly IAccountQuery _accountQuery;
    private readonly IUserRoleQuery _roleQuery;
    private readonly IAuthService _authService;
    private readonly IRefreshTokenQuery _refreshTokenQuery;
    private IUnitOfWork _unitOfWork;

    public RefreshTokenCommandHandler(IAccountQuery accountQuery, IAuthService authService, IUnitOfWork unitOfWork, IUserRoleQuery roleQuery, IRefreshTokenQuery refreshTokenQuery)
    {
        _accountQuery = accountQuery;
        _authService = authService;
        _unitOfWork = unitOfWork;
        _roleQuery = roleQuery;
        _refreshTokenQuery = refreshTokenQuery;
    }

    public async Task<ApiResponse<UserAccountDto>> Handle(RefreshTokenCommand request, CancellationToken cancellationToken)
    {
        var refreshToken = await _refreshTokenQuery.GetByTokenAsync(request.RefreshToken);

        if (refreshToken == null)
        {
            throw new UnauthorizedException("The refresh token is not existed");
        }

        if (refreshToken.Expire < DateTime.UtcNow)
        {
            await _unitOfWork._refreshTokenRepository.RemoveAsync(request.RefreshToken, cancellationToken);
            await _unitOfWork.SaveChangeAsync(cancellationToken);
            throw new UnauthorizedException("The refresh token is expired");
        }

        var account = await _accountQuery.GetByIdAsync(refreshToken.AccountId);

        if (account == null)
        {
            throw new BadRequestException("The account does not exist");
        }

        var roles = await _roleQuery.GetByUserIdAsync(account.Id);

        if (roles == null)
        {
            throw new BadRequestException("User role does not exist");
        }

        var accessToken = _authService.GenerateAccessToken(account, roles.Select(r => r.Type).ToList());
        var refreshTokenValue = _authService.GenerateRefreshToken();

        var newRefreshToken = new RefreshTokenEntity
        {
            Token = _authService.GenerateRefreshToken(),
            Expire = DateTime.UtcNow.AddDays(7),
            AccountId = account.Id
        };

        await _unitOfWork._refreshTokenRepository.CreateAsync(newRefreshToken, cancellationToken);

        await _unitOfWork._refreshTokenRepository.RemoveAsync(request.RefreshToken, cancellationToken);

        await _unitOfWork.SaveChangeAsync(cancellationToken);

        return new ApiResponse<UserAccountDto>
        {
            Success = true,
            Data = new UserAccountDto
            {
                AccessToken = accessToken,
                RefreshToken = refreshTokenValue
            },
            Message = "",
            StatusCode = HttpStatusCodeEnum.OK
        };
    }
}
