using Refit;

namespace Util.API.ExternalAPIs;

public interface ILocationApi
{
    [Get("/")]
    Task<IEnumerable<Province>> GetLocationAsync([Query] int? depth);
}
