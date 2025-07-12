using BuildingBlocks.Messaging.Events;
using Cart.Application.Dtos;
using Cart.Application.Modules.CartItem.Commands.UpdateByProductId;
using MassTransit;
using MediatR;

namespace Cart.Application.Modules.Cart.EventHandlers.Integration;
public class ProductUpdatedEventHandler : IConsumer<ProductUpdatedEvent>
{
    private readonly IMediator _mediator;

    public ProductUpdatedEventHandler(IMediator mediator)
    {
        _mediator = mediator;
    }

    public async Task Consume(ConsumeContext<ProductUpdatedEvent> context)
    {
        var message = context.Message;
        var cartItemDto = new CartItemDto
        {
            ProductId = message.Id,
            Name = message.Name,
            Price = (decimal)message.Price,
            ImageUrl = message.ImageUrl,
        };

        var updateCommand = new UpdateByProductIdCommand(cartItemDto);
        await _mediator.Send(updateCommand, context.CancellationToken);
    }
}
