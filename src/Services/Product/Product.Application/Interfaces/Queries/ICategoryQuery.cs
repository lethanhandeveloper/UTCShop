using BuildingBlocks.DBQueryAbtractions;
using Product.Domain.Modules.Product.Entities;

namespace Product.Application.Interfaces.Queries;

public interface ICategoryQuery : IBaseQuery<CategoryEntity>
{
    Task<List<CategoryEntity>> GetLeafCategories();
    Task<bool> IsLeafCategory(Guid Id);
}
