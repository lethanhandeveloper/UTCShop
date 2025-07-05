using BuildingBlocks.CQRS;
using Cart.Application.Dtos;
using Cart.Application.Interfaces.Queries;
using Cart.Application.Modules.Cart.Queries.GetCategories;
using Mapster;

namespace Product.Application.Modules.Category.Queries.GetCategories;
public class GetCategoriesQueryHandler(ICartQuery cartQuery) : IQueryHandler<GetCartByCustomerId, CartDto>
{
    public async Task<CartDto> Handle(GetCartByCustomerId request, CancellationToken cancellationToken)
    {
        var cart = await cartQuery.GetCartByCustomerId(request.cartDto.CustomerId);
        return cart.Adapt<CartDto>();
    }
}