using Microsoft.EntityFrameworkCore;
using Product.Domain.Modules.Product.Entities;

namespace Product.Domain.Data;

public interface IProductDbContext
{
    DbSet<ProductEntity> Products { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellation);
}
