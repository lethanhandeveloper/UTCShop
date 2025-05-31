using BuildingBlocks.Messaging.Events;
using MassTransit;

namespace Util.API.TestIntegrationEvent;

public class CategoryCreatedEventHandler : IConsumer<CategoryCreatedEvent>
{
    public Task Consume(ConsumeContext<CategoryCreatedEvent> context)
    {
        throw new NotImplementedException();
    }
}
