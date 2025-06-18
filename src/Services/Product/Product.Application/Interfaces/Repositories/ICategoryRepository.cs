using BuildingBlocks.BaseDBDataAccess.Repositories;
using Product.Domain.Modules.Product.Entities;

namespace Product.Application.Interfaces.Repositories;

public interface ICategoryRepository : IBaseRepository<CategoryEntity>
{

}
