namespace Configuration.API.DBContext;

using BuildingBlocks.BaseDBDataAccess.Interceptors;
using Configuration.Domain.Data;
using Configuration.Domain.Modules.Location.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Reflection;
using System.Threading.Tasks;

public class ConfigurationDBContext : DbContext, IConfigurationDbContext
{
    public DbSet<ProvinceEntity> Provinces { get; set; }
    public DbSet<DistrictEntity> Districts { get; set; }
    public DbSet<WardEntity> Wards { get; set; }

    private readonly AuditingSaveChangesInterceptor _auditingInterceptor;

    public ConfigurationDBContext(DbContextOptions<ConfigurationDBContext> options, AuditingSaveChangesInterceptor auditingInterceptor) : base(options)
    {
        _auditingInterceptor = auditingInterceptor;
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

    public async Task BulkInsertAsync<TEntity>(IList<TEntity> entities) where TEntity : class
    {
        await EFCore.BulkExtensions.DbContextBulkExtensions.BulkInsertAsync(this, entities);
    }
}
