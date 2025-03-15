using Microsoft.EntityFrameworkCore;

namespace User.Domain.Data;
public interface IUserDbContext
{
    DbSet<UserEntity> Users { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellation);
}
