using BuildingBlock.CQRS;
using BuildingBlocks.Exception;
using Cart.Application.Interfaces;
using Cart.Application.Interfaces.Queries;

namespace Cart.Application.Modules.CartItem.Commands.UpdateByProductId;
public class UpdateByProductIdCommandHandler : ICommandHandler<UpdateByProductIdCommand, UpdateCartItemResult>
{
    IUnitOfWork _unitOfWork;
    ICartItemQuery _cartItemQuery;

    public UpdateByProductIdCommandHandler(IUnitOfWork unitOfWork, ICartItemQuery cartItemQuery)
    {
        _unitOfWork = unitOfWork;
        _cartItemQuery = cartItemQuery;
    }

    public async Task<UpdateCartItemResult> Handle(UpdateByProductIdCommand request, CancellationToken cancellationToken)
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
}
