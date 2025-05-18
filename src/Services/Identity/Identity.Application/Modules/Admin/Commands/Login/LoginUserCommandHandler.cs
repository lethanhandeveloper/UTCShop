//using BuildingBlock.CQRS;
//using BuildingBlocks.Dtos;
//using BuildingBlocks.Enums;
//using Identity.Application.Dtos;
//using Identity.Application.Interfaces;
//using Identity.Application.Interfaces.Queries;
//using Mapster;

//namespace Identity.Application.Modules.Commands.Login;
//public class LoginUserCommandHandler : ICommandHandler<LoginUserCommand, ApiResponse<UserDto>>
//{
//    private readonly IUserQuery _userQuery;
//    private readonly IAuthService _authService;

//    public LoginUserCommandHandler(IUserQuery userQuery, IAuthService authService)
//    {
//        this._userQuery = userQuery;
//        this._authService = authService;
//    }

//    public async Task<ApiResponse<UserDto>> Handle(LoginUserCommand request, CancellationToken cancellationToken)
//    {
//        var user = await _userQuery.GetByUserName(request.Email);
//        if (user == null || !BCrypt.Net.BCrypt.Verify(request.Password, user.HashPassword))
//        {
//            return new ApiResponse<UserDto>
//            {
//                Success = false,
//                Data = null,
//                Message = "Username or password is incorrect",
//                StatusCode = HttpStatusCodeEnum.BadRequest
//            };
//        }
//        user = await _authService.GenerateAccessToken(user);

//        return new ApiResponse<UserDto>
//        {
//            Success = true,
//            Data = user.Adapt<UserDto>(),
//            Message = "Login successfully",
//            StatusCode = HttpStatusCodeEnum.OK
//        };
//    }
//}
