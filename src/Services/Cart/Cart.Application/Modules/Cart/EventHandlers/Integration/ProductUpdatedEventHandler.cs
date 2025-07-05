using BuildingBlocks.Messaging.Events;
using MassTransit;

namespace Cart.Application.Modules.Cart.EventHandlers.Integration;
public class ProductUpdatedEventHandler : IConsumer<ProductUpdatedEvent>
{
    public Task Consume(ConsumeContext<ProductUpdatedEvent> context)
    {
        var message = context.Message;
        throw new NotImplementedException();
    }
}
