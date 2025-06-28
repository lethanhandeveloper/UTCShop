using BuildingBlocks.DBQuery;
using Identity.Domain.Entities;

namespace Identity.Application.Interfaces.Queries;

public interface IUserRoleQuery : IBaseQuery<UserRoleEntity>
{
    public Task<List<UserRoleEntity>> GetByUserIdAsync(Guid userId);
}
