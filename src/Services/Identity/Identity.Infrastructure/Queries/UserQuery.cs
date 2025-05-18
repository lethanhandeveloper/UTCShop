using BuildingBlocks.Pagination;
using Identity.Application.Interfaces.Queries;
using Identity.Domain.Data;
using Identity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Identity.Infrastructure.Queries;
public class UserQuery : IUserQuery
{
    IIdentityDbContext _dbContext;

    public UserQuery(IIdentityDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Task<long> CountAsync()
    {
        throw new NotImplementedException();
    }

    public async Task<UserEntity> GetByIdAsync(Guid Id)
    {
        return await _dbContext.Users.Where(u => u.Id == Id).FirstOrDefaultAsync();
    }

    public async Task<UserEntity?> GetByUserName(string username)
    {
        return await _dbContext.Users.Where(u => u.Email == username).FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<UserEntity>> GetPagedAsync(List<FilterCreteria> filter, int pageNumber = 1, int pageSize = 10)
    {
        return await _dbContext.Users.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
    }
}
