using BuildingBlocks.DBQueryAbtractions;
using Identity.Domain.Entities;

namespace Identity.Application.Interfaces.Queries;

public interface IRoleQuery : IBaseQuery<RoleEntity>
{
    public Task<List<RoleEntity>> GetByUserIdAsync(Guid userId);
}
