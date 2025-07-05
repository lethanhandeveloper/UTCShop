using Cart.Domain.Modules.Cart.Entities;
using Microsoft.EntityFrameworkCore;

namespace Cart.Domain.Data;

public interface ICartDbContext
{
    DbSet<CartEntity> Carts { get; }
    DbSet<CartItemEntity> CartItems { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellation);
}
