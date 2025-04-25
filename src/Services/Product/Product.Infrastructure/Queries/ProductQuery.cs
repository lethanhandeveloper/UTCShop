using BuildingBlocks.Pagination;
using BuildingBlocks.Utils;
using Microsoft.EntityFrameworkCore;
using Product.Domain.Data;
using Product.Domain.Modules.Product.Entities;
using Product.Interfaces.Repositories;

namespace Product.Infrastructure.Queries;
public class ProductQuery : IProductQuery
{
    IProductDbContext _dbContext;

    public ProductQuery(IProductDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public Task<ProductEntity> AddAsync(ProductEntity entity, CancellationToken cancellation)
    {
        throw new NotImplementedException();
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

    public Task<ProductEntity> GetByIdAsync(Guid Id)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<ProductEntity>> GetPagedAsync(List<FilterCreteria> filters, int pageNumber = 1, int pageSize = 10)
    {
        var query = _dbContext.Products.AsQueryable();

        query = query.Skip((pageNumber - 1) * pageSize).Take(pageSize);

        foreach (var filter in filters)
        {
            var expression = ExpressionBuilder.BuildPredicate<ProductEntity>(filter);
            query = query.Where(expression);
        }

        return await query.ToListAsync();
    }
}
