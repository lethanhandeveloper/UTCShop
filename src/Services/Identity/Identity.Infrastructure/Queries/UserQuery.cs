using BuildingBlocks.BaseDBDataAccess.Queries;
using Identity.Application.Interfaces.Queries;
using Identity.Domain.Data;
using Identity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Identity.Infrastructure.Queries;
public class UserQuery : BaseQuery<UserEntity>, IUserQuery
{
    IIdentityDbContext _dbContext;

    public UserQuery(IIdentityDbContext dbContext) : base((DbContext)dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<UserEntity?> GetByUserName(string username)
    {
        return await _dbContext.Users.Where(u => u.Email == username).FirstOrDefaultAsync();
    }
}
