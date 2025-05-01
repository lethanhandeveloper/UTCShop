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

    public async Task<List<Guid>> DeleteAsync(List<Guid> Ids, CancellationToken cancellation)
    {
        var products = await _dbContext.Products.Where(p => Ids.Contains(p.Id)).ToListAsync();

        if (products == null)
        {
            throw new NotFoundException($"Product Not found");
        }

        foreach (var product in products)
        {
            product.IsDeleted = true;
        }

        await _dbContext.SaveChangesAsync(cancellation);

        return Ids;
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
        product.Price = entity.Price;
        product.ImageUrl = entity.ImageUrl;
        product.Description = entity.Description;
        product.CategoryId = entity.CategoryId;

        await _dbContext.SaveChangesAsync(cancellation);

        return entity.Id;
    }
}
