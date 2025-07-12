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
        ProductRequest productRequest = new ProductRequest
        {
            Id = request.cart.Items[0].ProductId.ToString(),
        };

        var productInfo = await _productProtoService.GetProductInfoAsync(productRequest);

        if (productInfo == null)
        {
            throw new BadRequestException("ProductId is not valid");
        }

        var cart = await _cartQuery.GetCartByCustomerId(request.cart.CustomerId.Value);

        if (cart == null)
        {
            cart = new CartEntity
            {
                Id = Guid.NewGuid(),
                CustomerId = request.cart.CustomerId.Value,
                TotalPrice = Int32.Parse(productInfo.Price),
            };

            await _unitOfWork._cartRepository.CreateAsync(cart, cancellationToken);
        }
        else
        {
            cart.TotalPrice += Int32.Parse(productInfo.Price);
            await _unitOfWork._cartRepository.UpdateAsync(cart, cancellationToken);
        }

        foreach (var item in request.cart.Items)
        {
            var cartItem = await _cartItemQuery.GetCartByProductId(item.ProductId);

            if (cartItem == null)
            {
                cartItem = new CartItemEntity
                {
                    ProductId = item.ProductId,
                    Name = productInfo.Name,
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
                    cartItem.Price += Int32.Parse(productInfo.Price);
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
