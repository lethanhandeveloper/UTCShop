using BuildingBlocks.BaseDBDataAccess.Repositories;
using Cart.Application.Interfaces.Repositories;
using Cart.Domain.Data;
using Cart.Domain.Modules.Cart.Entities;
using Microsoft.EntityFrameworkCore;


namespace Cart.Infrastructure.Repositories;
public class CartItemRepository : BaseRepository<CartItemEntity>, ICartItemRepository
{
    ICartDbContext _dbContext;

    public CartItemRepository(ICartDbContext dbContext) : base((DbContext)dbContext)
    {

    }
}
