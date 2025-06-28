
using BuildingBlocks.BaseDBDataAccess.UnitOfWork;
using Identity.Application.Interfaces;
using Identity.Application.Interfaces.Repositories;

namespace Identity.Infrastructure.Repositories;
public class UnitOfWork : BaseUnitOfWork<IdentityDbContext>, IUnitOfWork
{
    public IUserRepository _userRepository { get; set; }
    public IRefreshTokenRepository _refreshTokenRepository { get; set; }
    public IUserRoleRepository _userRoleRepository { get; set; }
    public IAccountRepository _accountRepository { get; set; }

    public UnitOfWork(IdentityDbContext dbContext) : base(dbContext)
    {
        _userRepository = new UserRepository(dbContext);
        _refreshTokenRepository = new RefreshTokenRepository(dbContext);
        _userRoleRepository = new UserRoleRepository(dbContext);
        _accountRepository = new AccountRepository(dbContext);
    }
}
