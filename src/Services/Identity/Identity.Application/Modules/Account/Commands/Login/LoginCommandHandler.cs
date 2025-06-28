using BuildingBlock.CQRS;
using BuildingBlocks.Dtos;
using BuildingBlocks.Enums;
using BuildingBlocks.Exception;
using Identity.Application.Dtos;
using Identity.Application.Interfaces;
using Identity.Application.Interfaces.Queries;
using Identity.Application.Modules.Account.Commands.Login;
using Identity.Domain.Entities;

namespace Identity.Application.Modules.Commands.Login;
public class LoginCommandHandler : ICommandHandler<LoginCommand, ApiResponse<UserAccountDto>>
{
    private readonly IAccountQuery _accountQuery;
    private readonly IAuthService _authService;
    private readonly IUserQuery _userQuery;
    private readonly IUserRoleQuery _userRoleQuery;
    private readonly IUnitOfWork _unitOfWork;

    public LoginCommandHandler(IAccountQuery accountQuery, IAuthService authService, IUserRoleQuery userRoleQuery, IUnitOfWork unitOfWork)
    {
        this._accountQuery = accountQuery;
        this._authService = authService;
        this._userRoleQuery = userRoleQuery;
        this._unitOfWork = unitOfWork;
    }

    public async Task<ApiResponse<UserAccountDto>> Handle(LoginCommand request, CancellationToken cancellationToken)
    {
        var account = await _accountQuery.GetByUserNameOrEmailAsync(request.UserName);
        if (account == null || !BCrypt.Net.BCrypt.Verify(request.Password, account.HashPassword))
        {
            throw new UnauthorizedException("Username or password is incorrect");
        }

        var roles = await _userRoleQuery.GetByUserIdAsync(account.Id);

        var accessToken = _authService.GenerateAccessToken(account, roles.Select(r => r.Type).ToList());
        var refreshTokenValue = _authService.GenerateRefreshToken();

        var refreshTokenEntity = new RefreshTokenEntity
        {
            Token = refreshTokenValue,
            Expire = DateTime.UtcNow.AddDays(7),
            AccountId = account.Id,
        };

        await _unitOfWork._refreshTokenRepository.CreateAsync(refreshTokenEntity, cancellationToken);
        await _unitOfWork.SaveChangeAsync(cancellationToken);

        return new ApiResponse<UserAccountDto>
        {
            Success = true,
            Data = new UserAccountDto
            {
                AccessToken = accessToken,
                RefreshToken = refreshTokenValue
            },
            Message = "Login successfully",
            StatusCode = HttpStatusCodeEnum.OK
        };
    }
}
