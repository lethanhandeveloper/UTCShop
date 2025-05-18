using BuildingBlocks.Pagination;
using BuildingBlocks.Utils;
using Microsoft.EntityFrameworkCore;
using Product.Application.Interfaces.Queries;
using Product.Domain.Data;
using Product.Domain.Modules.Product.Entities;

namespace Product.Infrastructure.Queries;
public class CategoryQuery : ICategoryQuery
{
    IProductDbContext _dbContext;

    public CategoryQuery(IProductDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Task<CategoryEntity> AddAsync(CategoryEntity entity, CancellationToken cancellation)
    {
        throw new NotImplementedException();
    }

    public Task<long> CountAsync()
    {
        throw new NotImplementedException();
    }

    public Task<CategoryEntity> GetByIdAsync(Guid Id)
    {
        throw new NotImplementedException();
    }

    public async Task<List<CategoryEntity>> GetLeafCategories()
    {
        var parentIds = await _dbContext.Categories.Select(c => c.ParentId).ToListAsync();
        return await _dbContext.Categories.Where(c => !parentIds.Contains(c.Id)).ToListAsync();
    }

    public async Task<IEnumerable<CategoryEntity>> GetPagedAsync(List<FilterCreteria> filters, int pageNumber = 1, int pageSize = 10)
    {
        var query = _dbContext.Categories.AsQueryable();

        query = query.Where(p => p.IsDeleted == false);

        foreach (var filter in filters)
        {
            var expression = ExpressionBuilder.BuildPredicate<CategoryEntity>(filter);
            query = query.Where(expression);
        }

        query = query.Skip((pageNumber - 1) * pageSize).Take(pageSize);

        return await query.ToListAsync();
    }

    public async Task<bool> IsLeafCategory(Guid Id)
    {
        var parentIds = await _dbContext.Categories.Select(c => c.ParentId).ToListAsync();
        return await _dbContext.Categories.Where(c => c.Id == Id && !parentIds.Contains(c.Id)).AnyAsync();
    }
}
