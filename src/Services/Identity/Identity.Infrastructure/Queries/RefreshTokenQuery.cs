using BuildingBlocks.Pagination;
using Identity.Application.Interfaces.Queries;
using Identity.Domain.Data;
using Identity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Identity.Infrastructure.Queries;
public class RefreshTokenQuery : IRefreshTokenQuery
{
    IIdentityDbContext _dbContext;

    public RefreshTokenQuery(IIdentityDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Task<long> CountAsync()
    {
        throw new NotImplementedException();
    }

    public Task<RefreshTokenEntity> GetByIdAsync(Guid Id)
    {
        throw new NotImplementedException();
    }

    public async Task<RefreshTokenEntity> GetByTokenAsync(string token)
    {
        return await _dbContext.RefreshTokens.Where(t => t.Token == token).FirstOrDefaultAsync();
    }

    public Task<IEnumerable<RefreshTokenEntity>> GetPagedAsync(List<FilterCreteria> filters, int pageNumber = 1, int pageSize = 10)
    {
        throw new NotImplementedException();
    }
}
