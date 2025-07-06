using BuildingBlocks.BaseDBDataAccess.Interceptors;
using Cart.Domain.Data;
using Cart.Domain.Modules.Cart.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Cart.Infrastructure;
public class CartDBContext : DbContext, ICartDbContext
{
    public CartDBContext(DbContextOptions options, AuditingSaveChangesInterceptor auditingInterceptor) : base(options)
    {
        _auditingInterceptor=auditingInterceptor;

    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        optionsBuilder.AddInterceptors(_auditingInterceptor);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        base.OnModelCreating(modelBuilder);
    }

    public DbSet<CartEntity> Carts => Set<CartEntity>();
    public DbSet<CartItemEntity> CartItems => Set<CartItemEntity>();

    private readonly AuditingSaveChangesInterceptor _auditingInterceptor;
}
