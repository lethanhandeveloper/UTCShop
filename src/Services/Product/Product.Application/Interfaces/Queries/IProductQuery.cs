using BuildingBlocks.DBQueryAbtractions;
using Product.Domain.Modules.Product.Entities;

namespace Product.Application.Interfaces.Queries;

public interface IProductQuery : IBaseQuery<ProductEntity>
{

}
