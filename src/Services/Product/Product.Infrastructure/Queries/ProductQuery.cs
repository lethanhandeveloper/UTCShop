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

    public async Task<IEnumerable<ProductEntity>> GetPagedAsync(int pageNumber = 1, int pageSize = 10)
    {
        return await _dbContext.Products.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
    }
}
