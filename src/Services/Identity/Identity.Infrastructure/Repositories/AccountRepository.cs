using BuildingBlocks.BaseDBDataAccess.Repositories;
using Identity.Application.Interfaces.Repositories;
using Identity.Domain.Entities;

namespace Identity.Infrastructure.Repositories;
public class AccountRepository : BaseRepository<AccountEntity>, IAccountRepository
{
    public AccountRepository(IdentityDbContext dbContext) : base(dbContext)
    {
    }
}
