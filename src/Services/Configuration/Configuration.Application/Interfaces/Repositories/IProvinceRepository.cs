using BuildingBlocks.BaseDBDataAccess.Repositories;
using Configuration.Domain.Modules.Location.Entities;

namespace Configuration.Application.Interfaces.Repositories;

public interface IProvinceRepository : IBaseRepository<ProvinceEntity>
{
    Task<bool> ClearAll(CancellationToken cancellation);
}
