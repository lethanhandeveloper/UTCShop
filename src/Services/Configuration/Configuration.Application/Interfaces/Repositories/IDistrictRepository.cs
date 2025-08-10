using BuildingBlocks.BaseDBDataAccess.Repositories;
using Configuration.Domain.Modules.Location.Entities;

namespace Configuration.Application.Interfaces.Repositories;

public interface IDistrictRepository : IBaseRepository<DistrictEntity>
{
    Task<bool> ClearAll(CancellationToken cancellation);
}
