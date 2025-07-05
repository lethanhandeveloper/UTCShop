using BuildingBlocks.BaseDBDataAccess.Repositories;
using Cart.Domain.Modules.Cart.Entities;

namespace Cart.Application.Interfaces.Repositories;

public interface ICartItemRepository : IBaseRepository<CartItemEntity>
{

}
