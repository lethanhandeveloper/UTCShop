using BuildingBlocks.DBQueryAbtractions;
using Product.Domain.Modules.Product.Entities;

namespace Product.Application.Interfaces.Repositories;

public interface IProductRepository : IBaseRepository<ProductEntity>
{

}
