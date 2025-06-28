using BuildingBlocks.BaseDBDataAccess.Queries;
using Identity.Application.Interfaces.Queries;
using Identity.Domain.Data;
using Identity.Domain.Entities;
using Microsoft.EntityFrameworkCore;
namespace Identity.Infrastructure.Queries;

public class UserRoleQuery : BaseQuery<UserRoleEntity>, IUserRoleQuery
{
    IIdentityDbContext _dbContext;

    public UserRoleQuery(IIdentityDbContext dbContext) : base((DbContext)dbContext)
    {
        _dbContext = dbContext;
    }



    //public Task<long> CountAsync()
    //{
    //    throw new NotImplementedException();
    //}

    public async Task<List<UserRoleEntity>> GetByUserIdAsync(Guid userId)
    {
        return await _dbContext.Roles.Where(r => r.UserId == userId).ToListAsync();
    }

    //public async Task<RoleEntity> GetByIdAsync(Guid Id)
    //{
    //    throw new NotImplementedException();
    //}

    //Task<IEnumerable<RoleEntity>> IBaseQuery<RoleEntity>.GetPagedAsync(List<FilterCreteria> filters, int pageNumber, int pageSize)
    //{
    //    throw new NotImplementedException();
    //}
}
