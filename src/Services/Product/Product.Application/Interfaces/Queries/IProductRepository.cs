using BuildingBlocks.DBQueryAbtractions;
using Product.Domain.Modules.Product.Entities;

namespace Product.Interfaces.Queries;

public interface IProductRepository : IBaseRepository<ProductEntity>
{

}
