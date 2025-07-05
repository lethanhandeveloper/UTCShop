using BuildingBlock.CQRS;
using Cart.Application.Dtos;

namespace Cart.Application.Modules.Cart.Commands.Update;
public record UpdateCartCommand(CartDto cart) : ICommand<UpdateCartResult>
{
}

public record UpdateCartResult(Guid Id);