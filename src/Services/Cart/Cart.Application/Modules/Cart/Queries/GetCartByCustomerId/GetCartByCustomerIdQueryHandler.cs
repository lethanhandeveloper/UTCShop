using BuildingBlocks.Cache;
using BuildingBlocks.CQRS;
using Cart.Application.Dtos;
using Cart.Application.Interfaces.Queries;
using Cart.Application.Modules.Cart.Queries.GetCategories;

namespace Product.Application.Modules.Category.Queries.GetCartByCustomerId;
public class GetCartByCustomerIdQueryHandler(ICartQuery cartQuery, IBaseCacheService baseCacheService) : IQueryHandler<GetCartByCustomerIdQuery, CartDto>
{
    public async Task<CartDto> Handle(GetCartByCustomerIdQuery request, CancellationToken cancellationToken)
    {
        var cachedCart = await baseCacheService.GetAsync<CartDto>(request.cartDto.CustomerId.ToString());

        if (cachedCart != null)
        {
            return cachedCart;
        }

        var cart = await cartQuery.GetCartByCustomerId(request.cartDto.CustomerId.Value);

        if (cart == null)
        {
            return null;
        }

        var cartDto = new CartDto();

        cartDto.Id = cart.Id;
        cartDto.CustomerId = cart.CustomerId;

        foreach (var cartItem in cart.CartItems)
        {
            cartDto.Items.Add(new CartItemDto
            {
                Id = cartItem.Id,
                Name = cartItem.Name,
                ImageUrl = cartItem.ImageUrl,
                ProductId = cartItem.ProductId,
                Quantity = cartItem.Quantity,
            });
        }

        await baseCacheService.SetAsync(cart.CustomerId.ToString(), cartDto);

        return cartDto;
    }
}