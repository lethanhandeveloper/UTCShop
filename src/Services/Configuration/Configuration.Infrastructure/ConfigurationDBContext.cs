//namespace Configuration.API.DBContext;

//using System.Reflection;

//public class UtilDBContext : DbContext
//{
//    public DbSet<SystemConfigurationEntity> SystemConfigurations { get; set; }
//    public DbSet<ProvinceEntity> Provinces { get; set; }
//    public DbSet<DistrictEntity> Districts { get; set; }
//    public DbSet<WardEntity> Wards { get; set; }
//    public UtilDBContext(DbContextOptions<UtilDBContext> options) : base(options)
//    {

//    }

//    protected override void OnModelCreating(ModelBuilder modelBuilder)
//    {
//        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
//        base.OnModelCreating(modelBuilder);
//    }
//}
