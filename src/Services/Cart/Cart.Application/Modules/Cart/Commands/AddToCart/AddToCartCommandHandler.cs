using BuildingBlock.CQRS;
using BuildingBlocks.Exception;
using Cart.Application.Interfaces;
using Cart.Application.Interfaces.Queries;
using Cart.Domain.Modules.Cart.Entities;
using Product.Grpc;

namespace Cart.Application.Modules.Cart.Commands.AddToCart;
public class AddToCartCommandHandler : ICommandHandler<AddToCartCommand, AddToCartResult>
{
    IUnitOfWork _unitOfWork;
    ICartQuery _cartQuery;
    ICartItemQuery _cartItemQuery;
    Product.Grpc.Product.ProductClient _productProtoService;
    //ProductProtoService.ProductProtoServiceClient _productProtoService;

    public AddToCartCommandHandler(IUnitOfWork unitOfWork, ICartQuery cartQuery, ICartItemQuery cartItemQuery, Product.Grpc.Product.ProductClient productProtoService)
    {
        _unitOfWork = unitOfWork;
        _cartQuery = cartQuery;
        _cartItemQuery = cartItemQuery;
        _productProtoService = productProtoService;
    }

    public async Task<AddToCartResult> Handle(AddToCartCommand request, CancellationToken cancellationToken)
    {
        var cart = await _cartQuery.GetCartByCustomerId(request.cart.CustomerId);

        if (cart == null)
        {
            cart = new CartEntity
            {
                Id = Guid.NewGuid(),
                CustomerId = request.cart.CustomerId,
                TotalPrice = (int)request.cart.Items.Select(x => x.Price).Sum()
            };

            await _unitOfWork._cartRepository.CreateAsync(cart, cancellationToken);
        }
        else
        {
            cart.TotalPrice = (int)request.cart.Items.Select(x => x.Price).Sum();
            await _unitOfWork._cartRepository.UpdateAsync(cart, cancellationToken);
        }

        foreach (var item in request.cart.Items)
        {
            var cartItem = await _cartItemQuery.GetCartByProductId(item.ProductId);

            if (cartItem == null)
            {
                ProductRequest productRequest = new ProductRequest
                {
                    Id = item.ProductId.ToString(),
                };

                var productInfo = await _productProtoService.GetProductInfoAsync(productRequest);

                if (productInfo == null)
                {
                    throw new BadRequestException("ProductId is not valid");
                }

                cartItem = new CartItemEntity
                {
                    ProductId = item.ProductId,
                    CartId = cart.Id,
                    Price = Int32.Parse(productInfo.Price),
                    Quantity = item.Quantity,
                };

                await _unitOfWork._cartItemRepository.CreateAsync(cartItem, cancellationToken);
            }
            else
            {
                if (item.Quantity > 0)
                {
                    cartItem.Quantity += item.Quantity;
                    await _unitOfWork._cartItemRepository.UpdateAsync(cartItem, cancellationToken);
                }
                else
                {
                    await _unitOfWork._cartItemRepository.DeleteAsync(new List<Guid> { cartItem.Id }, cancellationToken);
                }
            }
        }

        await _unitOfWork.SaveChangeAsync(cancellationToken);
        return new AddToCartResult(cart.Id);
    }

}
