using Product.Application.Interfaces;
using Product.Application.Interfaces.Repositories;
using Product.Domain.Data;

namespace Product.Infrastructure.Repositories;
public class UnitOfWork : IUnitOfWork
{
    public IProductDbContext _productDbContext;
    public IProductRepository _productRepository { get; set; }
    public ICategoryRepository _categoryRepository { get; set; }

    public UnitOfWork(IProductDbContext productDbContext, IProductRepository productRepository, ICategoryRepository categoryRepository)
    {
        _productDbContext = productDbContext;
        _productRepository = new ProductRepository(productDbContext);
        _categoryRepository = new CategoryRepository(productDbContext);
    }

    public async Task<int> SaveChangeAsync(CancellationToken cancellation)
    {
        return await _productDbContext.SaveChangesAsync(cancellation);
    }
}
