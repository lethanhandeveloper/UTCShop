using Identity.Application.Interfaces.Repositories;
using Identity.Domain.Data;
using Identity.Domain.Entities;

namespace Identity.Infrastructure.Repositories;
public class RoleRepository : IRoleRepository
{
    private readonly IIdentityDbContext _dbContext;

    public RoleRepository(IIdentityDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task CreateAsync(RoleEntity entity, CancellationToken cancellation)
    {
        await _dbContext.Roles.AddAsync(entity);
    }

    public Task DeleteAsync(List<Guid> Ids, CancellationToken cancellation)
    {
        throw new NotImplementedException();
    }

    public Task UpdateAsync(RoleEntity entity, CancellationToken cancellation)
    {
        throw new NotImplementedException();
    }
}
