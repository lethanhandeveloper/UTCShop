using BuildingBlocks.DBQuery;
using Product.Domain.Modules.Product.Entities;

namespace Product.Application.Interfaces.Queries;

public interface ICategoryQuery : IBaseQuery<CategoryEntity>
{
    Task<List<CategoryEntity>> GetLeafCategories();
    Task<List<CategoryEntity>> GetAllCategories();
    Task<bool> IsLeafCategory(Guid Id);
}
