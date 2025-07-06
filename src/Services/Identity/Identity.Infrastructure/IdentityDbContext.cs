using BuildingBlocks.BaseDBDataAccess.Interceptors;
using Identity.Domain.Data;
using Identity.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace Identity.Infrastructure;
public class IdentityDbContext : DbContext, IIdentityDbContext
{
    public DbSet<UserEntity> Users => Set<UserEntity>();
    public DbSet<UserRoleEntity> Roles => Set<UserRoleEntity>();
    public DbSet<AccountEntity> Accounts => Set<AccountEntity>();
    public DbSet<RefreshTokenEntity> RefreshTokens => Set<RefreshTokenEntity>();

    private readonly AuditingSaveChangesInterceptor _auditingInterceptor;

    public IdentityDbContext(DbContextOptions<IdentityDbContext> options, AuditingSaveChangesInterceptor auditingInterceptor) : base(options)
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
}
