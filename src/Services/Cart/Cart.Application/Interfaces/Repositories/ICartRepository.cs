using BuildingBlocks.BaseDBDataAccess.Repositories;
using Cart.Domain.Modules.Cart.Entities;

namespace Cart.Application.Interfaces.Repositories;

public interface ICartRepository : IBaseRepository<CartEntity>
{

}
