using BuildingBlock.CQRS;
using Cart.Application.Dtos;

namespace Cart.Application.Modules.Cart.Commands.AddToCart;
public record AddToCartCommand(CartDto cart) : ICommand<AddToCartResult>
{
}

public record AddToCartResult(Guid Id);