using BuildingBlocks.BaseDBDataAccess.Repositories;
using Microsoft.EntityFrameworkCore;
using Product.Application.Interfaces.Repositories;
using Product.Domain.Data;
using Product.Domain.Modules.Product.Entities;

namespace Product.Infrastructure.Repositories;
public class CategoryRepository : BaseRepository<CategoryEntity>, ICategoryRepository
{
    IProductDbContext _dbContext;

    public CategoryRepository(IProductDbContext dbContext) : base((DbContext)dbContext)
    {
    }

    //public async Task CreateAsync(CategoryEntity entity, CancellationToken cancellation)
    //{
    //    await _dbContext.Categories.AddAsync(entity);
    //}

    //public async Task DeleteAsync(List<Guid> Ids, CancellationToken cancellation)
    //{
    //    var categories = await _dbContext.Categories.Where(x => Ids.Contains(x.Id)).ToListAsync();
    //    if (categories.Count() > 0)
    //    {
    //        foreach (var category in categories)
    //        {
    //            category.IsDeleted = true;
    //        }
    //    }
    //}

    public async Task UpdateAsync(CategoryEntity entity, CancellationToken cancellation)
    {
        //category.Name = entity.Name;
        //category.Description = entity.Description;
        //category.ImageUrl = entity.ImageUrl;
        //category.ParentId = entity.ParentId;
    }
}
