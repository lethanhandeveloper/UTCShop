using BuildingBlocks.Exception;
using Microsoft.EntityFrameworkCore;
using Product.Application.Interfaces.Repositories;
using Product.Domain.Data;
using Product.Domain.Modules.Product.Entities;

namespace Product.Infrastructure.Repositories;
public class ProductRepository : IProductRepository
{
    IProductDbContext _dbContext;

    public ProductRepository(IProductDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task CreateAsync(ProductEntity entity, CancellationToken cancellation)
    {
        await _dbContext.Products.AddAsync(entity);
    }

    public async Task DeleteAsync(List<Guid> Ids, CancellationToken cancellation)
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
    }

    public async Task UpdateAsync(ProductEntity entity, CancellationToken cancellation)
    {
        if (entity.Id == Guid.Empty)
        {
            throw new NotFoundException($"ProductId is not empty");
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
    }
}
