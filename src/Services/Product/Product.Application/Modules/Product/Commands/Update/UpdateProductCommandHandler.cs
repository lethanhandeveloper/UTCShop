using BuildingBlock.CQRS;
using BuildingBlocks.Messaging.Events;
using Mapster;
using MassTransit;
using Product.Application.Interfaces;
using Product.Domain.Modules.Product.Entities;

namespace Product.Application.Modules.Product.Commands.Update;
public class UpdateProductCommandHandler : ICommandHandler<UpdateProductCommand, UpdateProductResult>
{
    IUnitOfWork _unitOfWork;
    IPublishEndpoint _publishEndpoint;

    public UpdateProductCommandHandler(IUnitOfWork unitOfWork, IPublishEndpoint publishEndpoint)
    {
        _unitOfWork = unitOfWork;
        _publishEndpoint = publishEndpoint;
    }

    public async Task<UpdateProductResult> Handle(UpdateProductCommand command, CancellationToken cancellationToken)
    {
        var product = ProductEntity.Create(command.Product.Name,
            command.Product.Price.Value, command.Product.ImageUrl, command.Product.Description, command.Product.CategoryId.Value);

        product.Id = command.Product.Id.Value;

        await _unitOfWork._productRepository.UpdateAsync(product, cancellationToken);
        await _unitOfWork.SaveChangeAsync(cancellationToken);

        var productCreatedEvent = product.Adapt<ProductUpdatedEvent>();

        await _publishEndpoint.Publish(productCreatedEvent, cancellationToken);

        return new UpdateProductResult(product.Id);
    }
}
