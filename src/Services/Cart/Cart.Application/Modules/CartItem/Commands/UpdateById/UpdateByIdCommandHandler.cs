using BuildingBlock.CQRS;
using BuildingBlocks.Exception;
using Cart.Application.Interfaces;
using Cart.Application.Interfaces.Queries;

namespace Cart.Application.Modules.CartItem.Commands.UpdateById;
public class UpdateByIdCommandHandler : ICommandHandler<UpdateByIdCommand, UpdateCartItemResult>
{
    IUnitOfWork _unitOfWork;
    ICartItemQuery _cartItemQuery;

    public UpdateByIdCommandHandler(IUnitOfWork unitOfWork, ICartItemQuery cartItemQuery)
    {
        _unitOfWork = unitOfWork;
        _cartItemQuery = cartItemQuery;
    }

    public async Task<UpdateCartItemResult> Handle(UpdateByIdCommand request, CancellationToken cancellationToken)
    {
        var cartItem = await _cartItemQuery.GetCartByProductId(request.cartItem.ProductId);
        if (cartItem == null)
        {
            throw new NotFoundException($"Cart item with ID {request.cartItem.Id} not found.");
        }

        cartItem.Price = (int)request.cartItem.Price;

        await _unitOfWork._cartItemRepository.UpdateAsync(cartItem, cancellationToken);
        await _unitOfWork.SaveChangeAsync(cancellationToken);
        return new UpdateCartItemResult(cartItem.Id);
    }





    //public async Task<UpdateCartItemResult> Handle(UpdateByCustomerIdCommand request, CancellationToken cancellationToken)
    //{
    //    var cart = request.cart.Adapt<CartEntity>();

    //    await _unitOfWork._cartRepository.UpdateAsync(cart, cancellationToken);
    //    await _unitOfWork.SaveChangeAsync(cancellationToken);
    //    return new UpdateCartResult(cart.Id);
    //}
}
