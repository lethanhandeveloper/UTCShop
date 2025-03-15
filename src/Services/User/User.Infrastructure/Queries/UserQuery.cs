using Microsoft.EntityFrameworkCore;
using User.Domain;
using User.Domain.Data;
using User.Interfaces.Repositories;

namespace User.Infrastructure.Queries;
public class UserQuery : IUserQuery
{
    IUserDbContext _dbContext;

    public UserQuery(IUserDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Task<long> CountAsync()
    {
        throw new NotImplementedException();
    }

    public Task<UserEntity> GetByIdAsync()
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<UserEntity>> GetPagedAsync(int pageNumber = 1, int pageSize = 10)
    {
        return await _dbContext.Users.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
    }
}
