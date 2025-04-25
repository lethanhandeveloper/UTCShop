using BuildingBlocks.Exception;
using Microsoft.EntityFrameworkCore;
using Product.Domain.Data;
using Product.Domain.Modules.Product.Entities;
using Product.Interfaces.Queries;

namespace Product.Infrastructure.Repositories;
public class ProductRepository : IProductRepository
{
    IProductDbContext _dbContext;

    public ProductRepository(IProductDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Guid> CreateAsync(ProductEntity entity, CancellationToken cancellation)
    {
        var product = await _dbContext.Products.AddAsync(entity);
        await _dbContext.SaveChangesAsync(cancellation);
        return entity.Id;
    }

    public async Task<Guid> DeleteAsync(Guid Id, CancellationToken cancellation)
    {
        if (Id == Guid.Empty)
        {
            return Guid.Empty;
        }

        await _dbContext.Products.Where(p => p.Id == Id).ExecuteDeleteAsync();
        await _dbContext.SaveChangesAsync(cancellation);

        return Id;
    }

    public async Task<Guid> UpdateAsync(ProductEntity entity, CancellationToken cancellation)
    {
        if (entity.Id == Guid.Empty)
        {
            return Guid.Empty;
        }

        var product = await _dbContext.Products.Where(p => p.Id == entity.Id).FirstOrDefaultAsync();

        if (product == null)
        {
            throw new NotFoundException($"Product with id {entity.Id} not found");
        }

        product.Name = entity.Name;

        await _dbContext.SaveChangesAsync(cancellation);

        return entity.Id;
    }
}
