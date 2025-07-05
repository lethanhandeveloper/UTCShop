using BuildingBlocks.DBQuery;
using Cart.Domain.Modules.Cart.Entities;

namespace Cart.Application.Interfaces.Queries;

public interface ICartQuery : IBaseQuery<CartEntity>
{
    Task<CartEntity> GetCartByCustomerId(Guid id);
}
