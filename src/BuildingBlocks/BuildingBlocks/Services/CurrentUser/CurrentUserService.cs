using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace BuildingBlocks.Services.CurrentUser;
public class CurrentUserService : ICurrentUserService
{
    private readonly IHttpContextAccessor _accessor;

    public CurrentUserService(IHttpContextAccessor accessor)
    {
        _accessor = accessor;
    }

    public Guid? UserId
    {
        get
        {
            var userIdClaim = _accessor.HttpContext?.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (Guid.TryParse(userIdClaim, out Guid userId))
            {
                return userId;
            }

            return Guid.Empty;
        }
    }

    public string? UserName => throw new NotImplementedException();

    public string? Email => throw new NotImplementedException();

    public bool IsAuthenticated => throw new NotImplementedException();
}
