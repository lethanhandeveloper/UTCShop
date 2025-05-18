using BuildingBlock.CQRS;
using Product.Application.Interfaces;
using Product.Domain.Modules.Product.Entities;

namespace Product.Application.Modules.Category.Commands.Update;
public class UpdateCategoryCommandHandler : ICommandHandler<UpdateCategoryCommand, UpdateCategoryResult>
{
    IUnitOfWork _unitOfWork;

    public UpdateCategoryCommandHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<UpdateCategoryResult> Handle(UpdateCategoryCommand command, CancellationToken cancellationToken)
    {
        var category = CategoryEntity.Create(command.Category.Name,
        command.Category.Description, command.Category.ImageUrl, command.Category.ParentId);

        category.Id = command.Category.Id;

        await _unitOfWork._categoryRepository.UpdateAsync(category, cancellationToken);
        await _unitOfWork.SaveChangeAsync(cancellationToken);
        return new UpdateCategoryResult(category.Id);
    }
}
