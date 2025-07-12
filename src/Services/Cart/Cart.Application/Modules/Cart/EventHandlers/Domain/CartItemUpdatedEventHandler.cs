using Cart.Domain.Modules.Cart.DomainEvent;
using MediatR;

namespace Cart.Application.Modules.Cart.EventHandlers.Domain;
public class CartItemUpdatedEventHandler : INotificationHandler<CartItemUpdatedEvent>
{
    public Task Handle(CartItemUpdatedEvent notification, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
