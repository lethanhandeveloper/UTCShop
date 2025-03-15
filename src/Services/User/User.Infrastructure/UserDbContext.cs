using Microsoft.EntityFrameworkCore;
using System.Reflection;
using User.Domain;
using User.Domain.Data;

namespace User.Infrastructure;
public class UserDbContext : DbContext, IUserDbContext
{
    public DbSet<UserEntity> Users => Set<UserEntity>();

    public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        base.OnModelCreating(modelBuilder);
    }
}
