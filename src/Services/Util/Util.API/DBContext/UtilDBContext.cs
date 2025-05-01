using Microsoft.EntityFrameworkCore;

namespace Util.API.DBContext;
using Util.API.Entities;

public class UtilDBContext : DbContext
{
    public DbSet<SystemConfigurationEntity> SystemConfigurations { get; set; }
    public UtilDBContext(DbContextOptions<UtilDBContext> options) : base(options)
    {

    }
}
