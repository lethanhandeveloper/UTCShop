using BuildingBlocks.Pagination;
using BuildingBlocks.Utils;
using Microsoft.EntityFrameworkCore;
using Product.Application.Interfaces.Queries;
using Product.Domain.Data;
using Product.Domain.Modules.Product.Entities;

namespace Product.Infrastructure.Queries;
public class ProductQuery : IProductQuery
{
    IProductDbContext _dbContext;

    public ProductQuery(IProductDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<long> CountAsync()
    {
        return await _dbContext.Products.LongCountAsync();
    }

    public Task<IEnumerable<ProductEntity>> GetAllAsync()
    {
        throw new NotImplementedException();
    }

    public Task<ProductEntity> GetByIdAsync()
    {
        throw new NotImplementedException();
    }

    public async Task<ProductEntity> GetByIdAsync(Guid Id)
    {
        return await _dbContext.Products.Where(p => p.Id == Id).FirstOrDefaultAsync();
    }

    public async Task<IEnumerable<ProductEntity>> GetPagedAsync(List<FilterCreteria> filters, int pageNumber = 1, int pageSize = 10)
    {
        var query = _dbContext.Products.AsQueryable();

        query = query.Where(p => p.IsDeleted == false).Include(p => p.Category);

        foreach (var filter in filters)
        {
            var expression = ExpressionBuilder.BuildPredicate<ProductEntity>(filter);
            query = query.Where(expression);
        }

        query = query.Skip((pageNumber - 1) * pageSize).Take(pageSize);

        return await query.ToListAsync();
    }
}
