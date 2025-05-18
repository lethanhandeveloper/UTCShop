using BuildingBlocks.Exception;
using Microsoft.EntityFrameworkCore;
using Product.Application.Interfaces.Repositories;
using Product.Domain.Data;
using Product.Domain.Modules.Product.Entities;

namespace Product.Infrastructure.Repositories;
public class CategoryRepository : ICategoryRepository
{
    IProductDbContext _dbContext;

    public CategoryRepository(IProductDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task CreateAsync(CategoryEntity entity, CancellationToken cancellation)
    {
        await _dbContext.Categories.AddAsync(entity);
    }

    public async Task DeleteAsync(List<Guid> Ids, CancellationToken cancellation)
    {
        var categories = await _dbContext.Categories.Where(x => Ids.Contains(x.Id)).ToListAsync();
        if (categories.Count() > 0)
        {
            foreach (var category in categories)
            {
                category.IsDeleted = true;
            }
        }
    }

    public async Task UpdateAsync(CategoryEntity entity, CancellationToken cancellation)
    {
        if (entity.Id == null || entity.Id == Guid.Empty)
        {
            throw new NotFoundException($"Category is not empty");
        }

        var category = await _dbContext.Categories.Where(p => p.Id == entity.Id).FirstOrDefaultAsync();

        if (category == null)
        {
            throw new NotFoundException($"Category with id {entity.Id} not found");
        }

        category.Name = entity.Name;
        category.Description = entity.Description;
        category.ImageUrl = entity.ImageUrl;
        category.ParentId = entity.ParentId;

        await _dbContext.SaveChangesAsync(cancellation);
    }
}
