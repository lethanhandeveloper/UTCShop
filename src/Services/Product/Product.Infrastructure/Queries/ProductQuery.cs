using BuildingBlocks.BaseDBDataAccess.Queries;
using Microsoft.EntityFrameworkCore;
using Product.Application.Interfaces.Queries;
using Product.Domain.Data;
using Product.Domain.Modules.Product.Entities;

namespace Product.Infrastructure.Queries;
public class ProductQuery : BaseQuery<ProductEntity>, IProductQuery
{
    public ProductQuery(IProductDbContext dbContext) : base((DbContext)dbContext)
    {
    }
}
