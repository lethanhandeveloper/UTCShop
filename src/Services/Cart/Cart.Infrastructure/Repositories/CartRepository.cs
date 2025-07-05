using BuildingBlocks.BaseDBDataAccess.Repositories;
using Cart.Application.Interfaces.Repositories;
using Cart.Domain.Data;
using Cart.Domain.Modules.Cart.Entities;
using Microsoft.EntityFrameworkCore;


namespace Cart.Infrastructure.Repositories;
public class CartRepository : BaseRepository<CartEntity>, ICartRepository
{
    ICartDbContext _dbContext;

    public CartRepository(ICartDbContext dbContext) : base((DbContext)dbContext)
    {

    }
}
