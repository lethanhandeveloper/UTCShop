using Identity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Identity.Domain.Data;
public interface IIdentityDbContext
{
    DbSet<UserEntity> Users { get; }
    DbSet<UserRoleEntity> Roles { get; }
    DbSet<RefreshTokenEntity> RefreshTokens { get; }
    DbSet<AccountEntity> Accounts { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellation);
}
