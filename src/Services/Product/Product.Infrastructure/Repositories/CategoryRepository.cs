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

    public async Task UpdateAsync(CategoryEntity entity, CancellationToken cancellation)
    {
    }
}
