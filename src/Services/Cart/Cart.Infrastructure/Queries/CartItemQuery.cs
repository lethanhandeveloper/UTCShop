using BuildingBlocks.BaseDBDataAccess.Queries;
using Cart.Application.Interfaces.Queries;
using Cart.Domain.Data;
using Cart.Domain.Modules.Cart.Entities;
using Microsoft.EntityFrameworkCore;

namespace Cart.Infrastructure.Queries;
public class CartItemQuery : BaseQuery<CartItemEntity>, ICartItemQuery
{
    ICartDbContext _cartDbContext;

    public CartItemQuery(ICartDbContext dbContext) : base((DbContext)dbContext)
    {
        _cartDbContext = dbContext;
    }

    public async Task<CartItemEntity> GetCartByProductId(Guid id)
    {
        return await _cartDbContext.CartItems.Where(x => x.ProductId == id).FirstOrDefaultAsync();
    }
}
