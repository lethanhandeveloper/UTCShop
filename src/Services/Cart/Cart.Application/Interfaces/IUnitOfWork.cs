using Cart.Application.Interfaces.Repositories;

namespace Cart.Application.Interfaces;
public interface IUnitOfWork
{
    ICartRepository _cartRepository { get; }
    ICartItemRepository _cartItemRepository { get; }

    Task<int> SaveChangeAsync(CancellationToken cancellationToken);
}
