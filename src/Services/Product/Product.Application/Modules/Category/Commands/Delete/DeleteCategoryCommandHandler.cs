using BuildingBlock.CQRS;
using Product.Application.Interfaces;

namespace Product.Application.Modules.Category.Commands.Delete;
public class DeleteCategoryCommandHandler : ICommandHandler<DeleteCategoryCommand, DeleteCategoryResult>
{
    IUnitOfWork _unitOfWork;

    public DeleteCategoryCommandHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<DeleteCategoryResult> Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
    {
        await _unitOfWork._categoryRepository.DeleteAsync(request.Ids, cancellationToken);
        await _unitOfWork.SaveChangeAsync(cancellationToken);
        return new DeleteCategoryResult(request.Ids);
    }
}
