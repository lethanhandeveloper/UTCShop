using Configuration.Application.Dtos;
using Refit;

namespace Configuration.Infrastructure.Services.ExternalServices.Location.Refit.APIInterfaces;

public interface ILocationApi
{
    [Get("/")]
    Task<IEnumerable<ProvinceFetchingResultDto>> GetLocationAsync([Query] int? depth);
}
