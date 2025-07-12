using BuildingBlocks.Messaging.Events;
using MassTransit;
using MediatR;

namespace Identity.Application.Modules.User.EventHandlers.Integration;
public class UserInfoUpdatedEventHandler : IConsumer<UserInfoChangedEvent>
{
    private readonly IMediator _mediator;

    public UserInfoUpdatedEventHandler(IMediator mediator)
    {
        _mediator = mediator;
    }

    public Task Consume(ConsumeContext<UserInfoChangedEvent> context)
    {
        throw new NotImplementedException();
    }
}
