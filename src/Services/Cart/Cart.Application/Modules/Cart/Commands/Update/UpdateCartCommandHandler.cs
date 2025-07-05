using BuildingBlock.CQRS;
using Cart.Application.Interfaces;
using Cart.Domain.Modules.Cart.Entities;
using Mapster;

namespace Cart.Application.Modules.Cart.Commands.Update;
public class UpdateCartCommandHandler : ICommandHandler<UpdateCartCommand, UpdateCartResult>
{
    IUnitOfWork _unitOfWork;

    public UpdateCartCommandHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<UpdateCartResult> Handle(UpdateCartCommand request, CancellationToken cancellationToken)
    {
        var cart = request.cart.Adapt<CartEntity>();

        await _unitOfWork._cartRepository.UpdateAsync(cart, cancellationToken);
        await _unitOfWork.SaveChangeAsync(cancellationToken);
        return new UpdateCartResult(cart.Id);
    }
}
