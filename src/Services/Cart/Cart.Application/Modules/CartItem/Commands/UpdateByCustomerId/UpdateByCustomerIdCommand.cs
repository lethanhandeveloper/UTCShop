using BuildingBlock.CQRS;
using Cart.Application.Dtos;

namespace Cart.Application.Modules.CartItem.Commands.UpdateByCustomerId;
public record UpdateByCustomerIdCommand(CartItemDto cart) : ICommand<UpdateCartItemResult>
{
}

public record UpdateCartItemResult(Guid Id);