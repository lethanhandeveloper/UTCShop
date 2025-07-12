using BuildingBlocks.CQRS;
using Cart.Application.Dtos;

namespace Cart.Application.Modules.Cart.Queries.GetCategories;
public record GetCartByCustomerIdQuery(CartDto cartDto) : IQuery<CartDto>
{
}
