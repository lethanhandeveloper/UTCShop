using Microsoft.EntityFrameworkCore;
using Product.Domain.Data;
using Product.Domain.Modules.Product.Entities;
using System.Reflection;

namespace Product.Infrastructure;

public class ProductDBContext : DbContext, IProductDbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        base.OnModelCreating(modelBuilder);
    }

    public DbSet<ProductEntity> Products => Set<ProductEntity>();

}
