using BuildingBlock.CQRS;
using BuildingBlocks.Exception;
using Identity.Application.Interfaces;
using Identity.Application.Interfaces.Queries;

namespace Identity.Application.Modules.User.Commands.ChangeInfo;
public class ChangeInfoCommandHandler : ICommandHandler<ChangeInfoCommand, Guid>
{
    private readonly IUserQuery _userQuery;
    private readonly IUserRoleQuery _roleQuery;
    private readonly IAuthService _authService;
    private IUnitOfWork _unitOfWork;

    public ChangeInfoCommandHandler(IUserQuery userQuery, IAuthService authService, IUnitOfWork unitOfWork, IUserRoleQuery roleQuery)
    {
        _userQuery = userQuery;
        _authService = authService;
        _unitOfWork = unitOfWork;
        _roleQuery = roleQuery;
    }

    public async Task<Guid> Handle(ChangeInfoCommand request, CancellationToken cancellationToken)
    {
        var user = await _userQuery.GetByIdAsync(request.Id);
        if (user == null)
        {
            throw new BadRequestException("User is not existed");
        }

        user.Name = request.Name;
        user.Age = request.Age;
        user.Addresses = request.Addresses;

        await _unitOfWork._userRepository.UpdateAsync(user, cancellationToken);
        await _unitOfWork.SaveChangeAsync(cancellationToken);

        return user.Id;
    }

    //public async Task<ApiResponse<UserDto>> Handle(LoginUserCommand request, CancellationToken cancellationToken)
    //{
    //    var role = await _roleQuery.GetByUserIdAsync(user.Id);

    //    if (role.Count() <= 0)
    //    {
    //        return new ApiResponse<UserDto>
    //        {
    //            Success = false,
    //            Data = null,
    //            Message = "User role is not existed",
    //            StatusCode = HttpStatusCodeEnum.BadRequest
    //        };
    //    }
    //    await _unitOfWork.SaveChangeAsync(cancellationToken);

    //    return new ApiResponse<UserDto>
    //    {
    //        Success = true,
    //        Data = user.Adapt<UserDto>(),
    //        Message = "Login successfully",
    //        StatusCode = HttpStatusCodeEnum.OK
    //    };
    //}
}
