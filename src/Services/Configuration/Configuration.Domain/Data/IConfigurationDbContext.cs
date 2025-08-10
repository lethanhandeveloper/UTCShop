using Configuration.Domain.Modules.Location.Entities;
using Microsoft.EntityFrameworkCore;

namespace Configuration.Domain.Data;

public interface IConfigurationDbContext
{
    DbSet<ProvinceEntity> Provinces { get; }
    DbSet<DistrictEntity> Districts { get; }
    DbSet<WardEntity> Wards { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellation);
    Task BulkInsertAsync<TEntity>(IList<TEntity> entities) where TEntity : class;
}
