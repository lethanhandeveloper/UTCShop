using BuildingBlocks.BaseDBDataAccess.Queries;
using Identity.Application.Interfaces.Queries;
using Identity.Domain.Data;
using Identity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Identity.Infrastructure.Queries;
public class RefreshTokenQuery : BaseQuery<RefreshTokenEntity>, IRefreshTokenQuery
{
    IIdentityDbContext _dbContext;

    public RefreshTokenQuery(IIdentityDbContext dbContext) : base((DbContext)dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<RefreshTokenEntity> GetByTokenAsync(string token)
    {
        return await _dbContext.RefreshTokens.Where(t => t.Token == token).FirstOrDefaultAsync();
    }
}
