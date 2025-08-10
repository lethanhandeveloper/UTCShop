using Configuration.Application.Dtos;
using Configuration.Application.Interfaces.ExternalService;
using Configuration.Domain.Data;
using Configuration.Infrastructure.Services.ExternalServices.Location.Refit.APIInterfaces;

namespace Configuration.Infrastructure.Services.ExternalServices.Location;

public class LocationService : ILocationService
{
    private readonly ILocationApi _locationApi;
    private readonly IConfigurationDbContext _dbContext;

    public LocationService(ILocationApi locationApi, IConfigurationDbContext dbContext)
    {
        _locationApi = locationApi;
        _dbContext = dbContext;
    }

    public async Task<IEnumerable<ProvinceFetchingResultDto>> FetchLocationList()
    {
        return (IEnumerable<ProvinceFetchingResultDto>)await _locationApi.GetLocationAsync(3);
    }
}
