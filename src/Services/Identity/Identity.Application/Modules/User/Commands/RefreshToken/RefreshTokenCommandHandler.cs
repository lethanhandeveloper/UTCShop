using BuildingBlock.CQRS;
using BuildingBlocks.Dtos;
using BuildingBlocks.Enums;
using BuildingBlocks.Exception;
using Identity.Application.Dtos;
using Identity.Application.Interfaces;
using Identity.Application.Interfaces.Queries;
using Identity.Domain.Entities;
using Mapster;

namespace Identity.Application.Modules.User.Commands.Login;
public class RefreshTokenCommandHandler : ICommandHandler<RefreshTokenCommand, ApiResponse<UserDto>>
{
    private readonly IUserQuery _userQuery;
    private readonly IRoleQuery _roleQuery;
    private readonly IAuthService _authService;
    private readonly IRefreshTokenQuery _refreshTokenQuery;
    private IUnitOfWork _unitOfWork;

    public RefreshTokenCommandHandler(IUserQuery userQuery, IAuthService authService, IUnitOfWork unitOfWork, IRoleQuery roleQuery, IRefreshTokenQuery refreshTokenQuery)
    {
        _userQuery = userQuery;
        _authService = authService;
        _unitOfWork = unitOfWork;
        _roleQuery = roleQuery;
        _refreshTokenQuery = refreshTokenQuery;
    }

    public async Task<ApiResponse<UserDto>> Handle(RefreshTokenCommand request, CancellationToken cancellationToken)
    {
        var refreshToken = await _refreshTokenQuery.GetByTokenAsync(request.RefreshToken);

        if (refreshToken == null)
        {
            throw new UnauthorizedException("The refresh token is not existed");
        }

        if (refreshToken.Expire < DateTime.UtcNow)
        {
            throw new UnauthorizedException("The refresh token is expired");
        }

        var user = await _userQuery.GetByIdAsync(refreshToken.UserId);

        if (user == null)
        {
            throw new BadRequestException("The user is not existed");
        }

        var role = await _roleQuery.GetByUserIdAsync(user.Id);

        if (role == null)
        {
            return new ApiResponse<UserDto>
            {
                Success = false,
                Data = null,
                Message = "User role is not existed",
                StatusCode = HttpStatusCodeEnum.BadRequest
            };
        }

        user = await _authService.GenerateAccessToken(user, role);

        var newRefreshToken = new RefreshTokenEntity
        {
            Token = user.RefreshToken,
            Expire = DateTime.UtcNow.AddDays(7),
            UserId = user.Id
        };

        await _unitOfWork._refreshTokenRepository.CreateAsync(newRefreshToken, cancellationToken);

        await _unitOfWork._refreshTokenRepository.RemoveAsync(request.RefreshToken, cancellationToken);

        await _unitOfWork.SaveChangeAsync(cancellationToken);

        return new ApiResponse<UserDto>
        {
            Success = true,
            Data = user.Adapt<UserDto>(),
            Message = "Login successfully",
            StatusCode = HttpStatusCodeEnum.OK
        };
    }
}
