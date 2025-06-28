using BuildingBlocks.BaseDBDataAccess.Interceptors;
using BuildingBlocks.Services.CurrentUser;
using Microsoft.EntityFrameworkCore;
using Product.Domain.Data;
using Product.Domain.Modules.Product.Entities;
using System.Reflection;

namespace Product.Infrastructure;

public class ProductDBContext : DbContext, IProductDbContext
{
    private readonly ICurrentAccountService _currentUserService;

    public ProductDBContext(DbContextOptions<ProductDBContext> options) : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        optionsBuilder.AddInterceptors(new AuditingSaveChangesInterceptor());
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        base.OnModelCreating(modelBuilder);
    }

    public DbSet<ProductEntity> Products => Set<ProductEntity>();
    public DbSet<CategoryEntity> Categories => Set<CategoryEntity>();
}
