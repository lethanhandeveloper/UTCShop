using BuildingBlocks.BaseDBDataAccess.Repositories;
using Configuration.Application.Interfaces.Repositories;
using Configuration.Domain.Data;
using Configuration.Domain.Modules.Location.Entities;
using Microsoft.EntityFrameworkCore;

namespace Configuration.Infrastructure.Repositories;

public class ProvinceRepository : BaseRepository<ProvinceEntity>, IProvinceRepository
{
    private readonly IConfigurationDbContext _dbContext;

    public ProvinceRepository(IConfigurationDbContext dbContext) : base((DbContext)dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<bool> ClearAll(CancellationToken cancellation)
    {
        await _dbContext.Provinces.ExecuteDeleteAsync(cancellation);
        return true;
    }
}
