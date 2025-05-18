using Identity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Identity.Domain.Data;
public interface IIdentityDbContext
{
    DbSet<UserEntity> Users { get; }
    DbSet<RoleEntity> Roles { get; }
    DbSet<RefreshTokenEntity> RefreshTokens { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellation);
}
