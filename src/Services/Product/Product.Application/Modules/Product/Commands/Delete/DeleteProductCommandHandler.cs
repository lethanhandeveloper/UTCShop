using BuildingBlock.CQRS;
using Product.Application.Interfaces;

namespace Product.Application.Modules.Product.Commands.Delete;
public class DeleteProductCommandHandler : ICommandHandler<DeleteProductCommand, DeleteProductResult>
{
    IUnitOfWork _unitOfWork;

    public DeleteProductCommandHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<DeleteProductResult> Handle(DeleteProductCommand command, CancellationToken cancellationToken)
    {
        await _unitOfWork._productRepository.DeleteAsync(command.Ids, cancellationToken);
        await _unitOfWork.SaveChangeAsync(cancellationToken);
        return new DeleteProductResult(command.Ids);
    }
}
