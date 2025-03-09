using Microsoft.EntityFrameworkCore;
using Product.Domain.Data;
using Product.Domain.Modules.Product.Entities;

namespace Product.Infrastructure;

public class ProductDBContext : DbContext, IApplicationDbContext
{
    public ProductDBContext(DbContextOptions<ProductDBContext> options) : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(ProductDBContext).Assembly);
    }

    public DbSet<ProductEntity> Products => Set<ProductEntity>();

}
