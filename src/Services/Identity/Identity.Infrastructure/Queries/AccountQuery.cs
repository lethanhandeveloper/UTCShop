using BuildingBlocks.BaseDBDataAccess.Queries;
using Identity.Application.Interfaces.Queries;
using Identity.Domain.Data;
using Identity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Identity.Infrastructure.Queries;
public class AccountQuery : BaseQuery<AccountEntity>, IAccountQuery
{
    IIdentityDbContext _dbContext;

    public AccountQuery(IIdentityDbContext dbContext) : base((DbContext)dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<AccountEntity?> GetByUserNameOrEmailAsync(string username)
    {
        return await _dbContext.Accounts.Where(x => x.UserName == username || x.Email == username).FirstOrDefaultAsync();
    }
}
