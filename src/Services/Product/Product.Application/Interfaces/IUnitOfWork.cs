using Product.Application.Interfaces.Repositories;

namespace Product.Application.Interfaces;
public interface IUnitOfWork
{
    IProductRepository _productRepository { get; }
    ICategoryRepository _categoryRepository { get; }
    Task<int> SaveChangeAsync(CancellationToken cancellationToken);
}
