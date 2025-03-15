using Microsoft.EntityFrameworkCore;
using User.Application.Interfaces.Queries;
using User.Domain;
using User.Domain.Data;

namespace User.Infrastructure.Queries;
public class UserQuery : IUserQuery
{
    IUserDbContext _dbContext;

    public UserQuery(IUserDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<UserEntity> AddAsync(UserEntity entity, CancellationToken cancellation)
    {
        var result = await _dbContext.Users.AddAsync(entity);
        await _dbContext.SaveChangesAsync(cancellation);
        return result.Entity;
    }

    public Task<long> CountAsync()
    {
        throw new NotImplementedException();
    }

    public Task<UserEntity> GetByIdAsync(Guid Id)
    {
        throw new NotImplementedException();
    }

    public async Task<UserEntity?> GetByUserName(string username)
    {
        return await _dbContext.Users.Where(u => u.Email == username).FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<UserEntity>> GetPagedAsync(int pageNumber = 1, int pageSize = 10)
    {
        return await _dbContext.Users.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
    }
}
