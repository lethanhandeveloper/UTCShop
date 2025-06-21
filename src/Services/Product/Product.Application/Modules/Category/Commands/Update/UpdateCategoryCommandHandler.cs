using BuildingBlock.CQRS;
using BuildingBlocks.Exception;
using Product.Application.Interfaces;
using Product.Application.Interfaces.Queries;

namespace Product.Application.Modules.Category.Commands.Update;
public class UpdateCategoryCommandHandler : ICommandHandler<UpdateCategoryCommand, UpdateCategoryResult>
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly ICategoryQuery _categoryQuery;

    public UpdateCategoryCommandHandler(IUnitOfWork unitOfWork, ICategoryQuery categoryQuery)
    {
        _unitOfWork = unitOfWork;
        _categoryQuery = categoryQuery;
    }

    public async Task<UpdateCategoryResult> Handle(UpdateCategoryCommand command, CancellationToken cancellationToken)
    {
        if (command.Category.Id == null || command.Category.Id == Guid.Empty)
        {
            throw new NotFoundException($"Category is not empty");
        }

        var category = await _categoryQuery.GetByIdAsync(command.Category.Id);

        if (category == null)
        {
            throw new NotFoundException($"Category with id {command.Category.Id} not found");
        }

        category.Name = command.Category.Name;
        category.Description = command.Category.Description;
        category.ImageUrl = command.Category.ImageUrl;
        category.ParentId = command.Category.ParentId;

        await _unitOfWork._categoryRepository.UpdateAsync(category, cancellationToken);
        await _unitOfWork.SaveChangeAsync(cancellationToken);
        return new UpdateCategoryResult(category.Id);
    }
}
