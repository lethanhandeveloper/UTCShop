using BuildingBlocks.CQRS;
using Cart.Application.Dtos;

namespace Cart.Application.Modules.Cart.Queries.GetCategories;
public record GetCartByCustomerId(CartDto cartDto) : IQuery<CartDto>
{
}
