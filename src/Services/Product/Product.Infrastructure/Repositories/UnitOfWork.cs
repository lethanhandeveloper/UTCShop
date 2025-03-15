using Product.Application.Interfaces;
using Product.Domain.Data;
using Product.Interfaces.Queries;

namespace Product.Infrastructure.Repositories;
public class UnitOfWork : IUnitOfWork
{
    public IProductDbContext _productDbContext;
    public IProductRepository _productRepository { get; set; }

    public UnitOfWork(IProductDbContext productDbContext, IProductRepository productRepository)
    {
        _productDbContext = productDbContext;
        _productRepository = new ProductRepository(productDbContext);
    }

    public async Task<int> SaveChangeAsync(CancellationToken cancellation)
    {
        return await _productDbContext.SaveChangesAsync(cancellation);
    }
}
