using BuildingBlocks.BaseDBDataAccess.Queries;
using Microsoft.EntityFrameworkCore;
using Product.Application.Interfaces.Queries;
using Product.Domain.Data;
using Product.Domain.Modules.Product.Entities;

namespace Product.Infrastructure.Queries;
public class CategoryQuery : BaseQuery<CategoryEntity>, ICategoryQuery
{
    IProductDbContext _dbContext;

    public CategoryQuery(IProductDbContext dbContext) : base((DbContext)dbContext)
    {
        _dbContext = dbContext;
    }

    public Task<List<CategoryEntity>> GetAllCategories()
    {
        throw new NotImplementedException();
    }

    public async Task<List<CategoryEntity>> GetLeafCategories()
    {
        var parentIds = await _dbContext.Categories.Select(c => c.ParentId).ToListAsync();
        return await _dbContext.Categories.Where(c => !parentIds.Contains(c.Id)).ToListAsync();
    }

    public async Task<bool> IsLeafCategory(Guid Id)
    {
        var parentIds = await _dbContext.Categories.Select(c => c.ParentId).ToListAsync();
        return await _dbContext.Categories.Where(c => c.Id == Id && !parentIds.Contains(c.Id)).AnyAsync();
    }
}
