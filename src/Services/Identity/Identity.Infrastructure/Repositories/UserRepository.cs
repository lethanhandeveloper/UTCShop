using Identity.Application.Interfaces.Repositories;
using Identity.Domain.Data;
using Identity.Domain.Entities;

namespace Identity.Infrastructure.Repositories;
public class UserRepository : IUserRepository
{
    private readonly IIdentityDbContext _dbContext;

    public UserRepository(IIdentityDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task CreateAsync(UserEntity entity, CancellationToken cancellation)
    {
        await _dbContext.Users.AddAsync(entity);
    }

    public Task DeleteAsync(List<Guid> Ids, CancellationToken cancellation)
    {
        throw new NotImplementedException();
    }

    public Task UpdateAsync(UserEntity entity, CancellationToken cancellation)
    {
        throw new NotImplementedException();
    }
}
