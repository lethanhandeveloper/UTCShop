using BuildingBlock.CQRS;
using Cart.Application.Interfaces;
using Cart.Application.Modules.CartItem.Commands.UpdateByCustomerId;

namespace Product.Application.Modules.Category.Commands.Update;
public class UpdateByCustomerIdCommandHandler : ICommandHandler<UpdateByCustomerIdCommand, UpdateCartItemResult>
{
    IUnitOfWork _unitOfWork;

    public UpdateByCustomerIdCommandHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public Task<UpdateCartItemResult> Handle(UpdateByCustomerIdCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    //public async Task<UpdateCartItemResult> Handle(UpdateByCustomerIdCommand request, CancellationToken cancellationToken)
    //{
    //    var cart = request.cart.Adapt<CartEntity>();

    //    await _unitOfWork._cartRepository.UpdateAsync(cart, cancellationToken);
    //    await _unitOfWork.SaveChangeAsync(cancellationToken);
    //    return new UpdateCartResult(cart.Id);
    //}
}
