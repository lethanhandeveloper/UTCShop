using BuildingBlock.CQRS;
using Product.Application.Interfaces;
using Product.Domain.Modules.Product.Entities;

namespace Product.Application.Modules.Product.Commands.Update;
public class UpdateProductCommandHandler : ICommandHandler<UpdateProductCommand, UpdateProductResult>
{
    IUnitOfWork _unitOfWork;

    public UpdateProductCommandHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<UpdateProductResult> Handle(UpdateProductCommand command, CancellationToken cancellationToken)
    {
        var product = ProductEntity.Create(command.Product.Name,
            command.Product.Price, command.Product.ImageUrl, command.Product.Description, command.Product.CategoryId);

        product.Id = command.Product.Id;

        await _unitOfWork._productRepository.UpdateAsync(product, cancellationToken);
        await _unitOfWork.SaveChangeAsync(cancellationToken);
        return new UpdateProductResult(product.Id);
    }
}
