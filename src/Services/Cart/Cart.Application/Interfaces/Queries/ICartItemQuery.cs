using BuildingBlocks.DBQuery;
using Cart.Domain.Modules.Cart.Entities;

namespace Cart.Application.Interfaces.Queries;

public interface ICartItemQuery : IBaseQuery<CartItemEntity>
{
    Task<CartItemEntity> GetCartByProductId(Guid id);
}
