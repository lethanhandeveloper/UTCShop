using Configuration.Application.Dtos;

namespace Configuration.Application.Interfaces.ExternalService;

public interface ILocationService
{
    public Task<IEnumerable<ProvinceFetchingResultDto>> FetchLocationList();
}
