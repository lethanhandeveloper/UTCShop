using Identity.Application.Interfaces.Repositories;
using Identity.Domain.Data;
using Identity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Identity.Infrastructure.Repositories;
public class RefreshTokenRepository : IRefreshTokenRepository
{
    private readonly IIdentityDbContext _dbContext;

    public RefreshTokenRepository(IIdentityDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task CreateAsync(RefreshTokenEntity entity, CancellationToken cancellation)
    {
        await _dbContext.RefreshTokens.AddAsync(entity);
    }

    public Task DeleteAsync(List<Guid> Ids, CancellationToken cancellation)
    {
        throw new NotImplementedException();
    }

    public async Task RemoveAsync(string token, CancellationToken cancellationToken)
    {
        await _dbContext.RefreshTokens.Where(t => t.Token == token).ExecuteDeleteAsync();
    }

    public Task UpdateAsync(RefreshTokenEntity entity, CancellationToken cancellation)
    {
        throw new NotImplementedException();
    }
}
