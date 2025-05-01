using BuildingBlock.CQRS;
using Product.Interfaces.Queries;

namespace Product.Application.Modules.Commands;
public class DeleteProductCommandHandler : ICommandHandler<DeleteProductCommand, DeleteProductResult>
{
    IProductRepository _repository;

    public DeleteProductCommandHandler(IProductRepository repository)
    {
        _repository = repository;
    }

    public async Task<DeleteProductResult> Handle(DeleteProductCommand command, CancellationToken cancellationToken)
    {
        var result = await _repository.DeleteAsync(command.Ids, cancellationToken);
        return new DeleteProductResult(result);
    }
}
