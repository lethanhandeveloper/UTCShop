using BuildingBlocks.BaseDBDataAccess.Queries;
using Configuration.Application.Interfaces.Queries;
using Configuration.Domain.Data;
using Configuration.Domain.Modules.Location.Entities;
using Microsoft.EntityFrameworkCore;

namespace Configuration.Infrastructure.Queries;

public class DistrictQuery : BaseQuery<DistrictEntity>, IDistrictQuery
{
    IConfigurationDbContext _dbContext;

    public DistrictQuery(IConfigurationDbContext dbContext) : base((DbContext)dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<DistrictEntity>> GetByProvinceIdAsync(Guid id)
    {
        return await _dbContext.Districts.Where(x => x.ProvinceId == id && x.IsDeleted == false).ToListAsync();
    }
}
