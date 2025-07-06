using BuildingBlock.CQRS;
using Cart.Application.Dtos;

namespace Cart.Application.Modules.CartItem.Commands.UpdateByProductId;
public record UpdateByProductIdCommand(CartItemDto cartItem) : ICommand<UpdateCartItemResult>
{
}

public record UpdateCartItemResult(Guid Id);