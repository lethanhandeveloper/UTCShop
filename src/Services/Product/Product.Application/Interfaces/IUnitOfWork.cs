using Product.Interfaces.Queries;

namespace Product.Application.Interfaces;
public interface IUnitOfWork
{
    IProductRepository _productRepository { get; }
    Task<int> SaveChangeAsync(CancellationToken cancellationToken);
}
