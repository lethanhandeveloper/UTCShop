
using Identity.Application.Interfaces;
using Identity.Application.Interfaces.Repositories;
using Identity.Domain.Data;

namespace Identity.Infrastructure.Repositories;
public class UnitOfWork : IUnitOfWork
{
    public IIdentityDbContext _identityDbContext;
    public IUserRepository _userRepository { get; set; }
    public IRefreshTokenRepository _refreshTokenRepository { get; set; }
    public IRoleRepository _roleRepository { get; set; }

    public UnitOfWork(IIdentityDbContext identityDbContext)
    {
        _identityDbContext = identityDbContext;
        _userRepository = new UserRepository(_identityDbContext);
        _refreshTokenRepository = new RefreshTokenRepository(_identityDbContext);
        _roleRepository = new RoleRepository(_identityDbContext);
    }

    public async Task<int> SaveChangeAsync(CancellationToken cancellationToken)
    {
        return await _identityDbContext.SaveChangesAsync(cancellationToken);
    }
}
