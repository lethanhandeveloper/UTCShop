using User.Interfaces.Queries;

namespace Product.Application.Interfaces;
public interface IUnitOfWork
{
    IUserRepository _productRepository { get; }
    Task<int> SaveChangeAsync(CancellationToken cancellationToken);
}
