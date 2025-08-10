using BuildingBlocks.BaseDBDataAccess.Queries;
using Configuration.Application.Interfaces.Queries;
using Configuration.Domain.Data;
using Configuration.Domain.Modules.Location.Entities;
using Microsoft.EntityFrameworkCore;

namespace Configuration.Infrastructure.Queries;

public class ProvinceQuery : BaseQuery<ProvinceEntity>, IProvinceQuery
{
    public ProvinceQuery(IConfigurationDbContext dbContext) : base((DbContext)dbContext)
    {
    }
}
