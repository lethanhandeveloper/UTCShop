using BuildingBlocks.DBQuery;
using Configuration.Domain.Modules.Location.Entities;

namespace Configuration.Application.Interfaces.Queries;

public interface IDistrictQuery : IBaseQuery<DistrictEntity>
{
    Task<List<DistrictEntity>> GetByProvinceIdAsync(Guid id);
}
