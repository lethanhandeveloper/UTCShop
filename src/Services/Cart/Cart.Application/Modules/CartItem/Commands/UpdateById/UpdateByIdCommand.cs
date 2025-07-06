using BuildingBlock.CQRS;
using Cart.Application.Dtos;

namespace Cart.Application.Modules.CartItem.Commands.UpdateById;
public record UpdateByIdCommand(CartItemDto cartItem) : ICommand<UpdateCartItemResult>
{
}

public record UpdateCartItemResult(Guid Id);