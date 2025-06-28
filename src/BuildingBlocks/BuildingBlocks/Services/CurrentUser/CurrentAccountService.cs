using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace BuildingBlocks.Services.CurrentUser;
public class CurrentAccountService : ICurrentAccountService
{
    private readonly IHttpContextAccessor _accessor;

    public CurrentAccountService(IHttpContextAccessor accessor)
    {
        _accessor = accessor;
    }

    public Guid? AccountId
    {
        get
        {
            var accountIdClaim = _accessor.HttpContext?.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (Guid.TryParse(accountIdClaim, out Guid accountId))
            {
                return accountId;
            }

            return Guid.Empty;
        }
    }

    public string? UserName => throw new NotImplementedException();

    public string? Email => throw new NotImplementedException();

    public bool IsAuthenticated => throw new NotImplementedException();
}
