using BuildingBlocks.BaseDBDataAccess.Queries;
using Configuration.Application.Interfaces.Queries;
using Configuration.Domain.Data;
using Configuration.Domain.Modules.Location.Entities;
using Microsoft.EntityFrameworkCore;

namespace Configuration.Infrastructure.Queries;

public class WardQuery : BaseQuery<WardEntity>, IWardQuery
{
    public WardQuery(IConfigurationDbContext dbContext) : base((DbContext)dbContext)
    {
    }
}
