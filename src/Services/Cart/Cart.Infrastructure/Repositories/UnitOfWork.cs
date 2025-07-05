
using BuildingBlocks.BaseDBDataAccess.UnitOfWork;
using Cart.Application.Interfaces;
using Cart.Application.Interfaces.Repositories;
using Cart.Domain.Data;

namespace Cart.Infrastructure.Repositories;
public class UnitOfWork : BaseUnitOfWork<CartDBContext>, IUnitOfWork
{
    public ICartRepository _cartRepository { get; set; }
    public ICartItemRepository _cartItemRepository { get; set; }

    public UnitOfWork(ICartDbContext dbContext) : base((CartDBContext)dbContext)
    {
        _cartRepository = new CartRepository(dbContext);
        _cartItemRepository = new CartItemRepository(dbContext);
    }
}
