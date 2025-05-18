using BuildingBlock.CQRS;
using Product.Application.Dtos;

namespace Product.Application.Modules.Category.Commands.Update;
public record UpdateCategoryCommand(CategoryDto Category) : ICommand<UpdateCategoryResult>
{
}

public record UpdateCategoryResult(Guid Id);