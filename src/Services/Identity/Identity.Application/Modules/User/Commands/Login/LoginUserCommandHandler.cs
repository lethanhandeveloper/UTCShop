using BuildingBlock.CQRS;
using BuildingBlocks.Dtos;
using BuildingBlocks.Enums;
using Identity.Application.Dtos;
using Identity.Application.Interfaces;
using Identity.Application.Interfaces.Queries;
using Mapster;

namespace Identity.Application.Modules.User.Commands.Login;
public class LoginUserCommandHandler : ICommandHandler<LoginUserCommand, ApiResponse<UserDto>>
{
    private readonly IUserQuery _userQuery;
    private readonly IUserRoleQuery _roleQuery;
    private readonly IAuthService _authService;
    private IUnitOfWork _unitOfWork;

    public LoginUserCommandHandler(IUserQuery userQuery, IAuthService authService, IUnitOfWork unitOfWork, IUserRoleQuery roleQuery)
    {
        _userQuery = userQuery;
        _authService = authService;
        _unitOfWork = unitOfWork;
        _roleQuery = roleQuery;
    }

    public async Task<ApiResponse<UserDto>> Handle(LoginUserCommand request, CancellationToken cancellationToken)
    {
        var user = await _userQuery.GetByUserName(request.Email);
        //if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.HashPassword))
        //{
        //    return new ApiResponse<UserDto>
        //    {
        //        Success = false,
        //        Data = null,
        //        Message = "Username or password is incorrect",
        //        StatusCode = HttpStatusCodeEnum.BadRequest
        //    };
        //}

        var role = await _roleQuery.GetByUserIdAsync(user.Id);

        if (role.Count() <= 0)
        {
            return new ApiResponse<UserDto>
            {
                Success = false,
                Data = null,
                Message = "User role is not existed",
                StatusCode = HttpStatusCodeEnum.BadRequest
            };
        }

        //user = await _authService.GenerateAccessToken(user, role);

        //var refreshToken = new RefreshTokenEntity
        //{
        //    Token = user.RefreshToken,
        //    Expire = DateTime.UtcNow.AddDays(3),
        //    UserId = user.Id
        //};

        //await _unitOfWork._refreshTokenRepository.CreateAsync(refreshToken, cancellationToken);

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
