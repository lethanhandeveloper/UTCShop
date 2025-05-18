using BuildingBlock.CQRS;
using Product.Application.Dtos;

namespace Product.Application.Modules.Category.Commands.Create;
public record CreateCategoryCommand(CategoryDto Category) : ICommand<CreateCategoryResult>
{
}

public record CreateCategoryResult(Guid Id);