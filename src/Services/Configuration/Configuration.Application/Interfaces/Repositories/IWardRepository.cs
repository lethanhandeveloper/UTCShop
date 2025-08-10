using BuildingBlocks.BaseDBDataAccess.Repositories;
using Configuration.Domain.Modules.Location.Entities;

namespace Configuration.Application.Interfaces.Repositories;

public interface IWardRepository : IBaseRepository<WardEntity>
{
    Task<bool> ClearAll(CancellationToken cancellation);
}
