using Microsoft.EntityFrameworkCore;
using Product.Domain.Modules.Product.Entities;

namespace Product.Domain.Data;

public interface IApplicationDbContext
{
    DbSet<ProductEntity> Products { get; }
}
