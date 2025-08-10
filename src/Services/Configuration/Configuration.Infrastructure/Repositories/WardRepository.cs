using BuildingBlocks.BaseDBDataAccess.Repositories;
using Configuration.Application.Interfaces.Repositories;
using Configuration.Domain.Data;
using Configuration.Domain.Modules.Location.Entities;
using Microsoft.EntityFrameworkCore;

namespace Configuration.Infrastructure.Repositories;

public class WardRepository : BaseRepository<WardEntity>, IWardRepository
{
    private readonly IConfigurationDbContext _dbContext;

    public WardRepository(IConfigurationDbContext dbContext) : base((DbContext)dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<bool> ClearAll(CancellationToken cancellation)
    {
        await _dbContext.Wards.ExecuteDeleteAsync(cancellation);
        return true;
    }
}
