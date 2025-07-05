using BuildingBlock.CQRS;
using Product.Application.Interfaces;
using Product.Domain.Modules.Product.Entities;

namespace Product.Application.Modules.Category.Commands.Create;
public class CreateCategoryCommandHandler : ICommandHandler<CreateCategoryCommand, CreateCategoryResult>
{
    IUnitOfWork _unitOfWork;

    public CreateCategoryCommandHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<CreateCategoryResult> Handle(CreateCategoryCommand command, CancellationToken cancellationToken)
    {
        //var validator = new ProductDtoValidator();
        //if (!validator.Validate(command.Product).IsValid)
        //{
        //    throw new ValidationException("Id format is not valid.");
        //}
        var category = CategoryEntity.Create(command.Category.Name,
        command.Category.Description, command.Category.ImageUrl, command.Category.ParentId);

        await _unitOfWork._categoryRepository.CreateAsync(category, cancellationToken);
        await _unitOfWork.SaveChangeAsync(cancellationToken);
        return new CreateCategoryResult(category.Id);
    }
}
