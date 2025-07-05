using BuildingBlocks.BaseDBDataAccess.Queries;
using Cart.Application.Interfaces.Queries;
using Cart.Domain.Data;
using Cart.Domain.Modules.Cart.Entities;
using Microsoft.EntityFrameworkCore;

namespace Cart.Infrastructure.Queries;
public class CartQuery : BaseQuery<CartEntity>, ICartQuery
{
    ICartDbContext _dbContext;

    public CartQuery(ICartDbContext dbContext) : base((DbContext)dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<CartEntity> GetCartByCustomerId(Guid id)
    {
        return await _dbContext.Carts.Where(x => x.CustomerId == id).FirstOrDefaultAsync();
    }
}
