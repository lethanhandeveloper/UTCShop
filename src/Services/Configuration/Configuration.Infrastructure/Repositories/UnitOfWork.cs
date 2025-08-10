
using BuildingBlocks.BaseDBDataAccess.UnitOfWork;
using Configuration.API.DBContext;
using Configuration.Application.Interfaces.Repositories;
using Configuration.Domain.Data;

namespace Configuration.Infrastructure.Repositories;
public class UnitOfWork : BaseUnitOfWork<ConfigurationDBContext>, IUnitOfWork
{
    public UnitOfWork(ConfigurationDBContext dbContext) : base((ConfigurationDBContext)dbContext)
    {
        _configurationDbContext = dbContext;

        _provinceRepository = new ProvinceRepository(dbContext);
        _districtRepository = new DistrictRepository(dbContext);
        _wardRepository = new WardRepository(dbContext);
    }

    public IProvinceRepository _provinceRepository { get; set; }
    public IDistrictRepository _districtRepository { get; set; }
    public IWardRepository _wardRepository { get; set; }

    public IConfigurationDbContext _configurationDbContext { get; set; }
}