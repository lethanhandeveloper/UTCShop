using BuildingBlock.CQRS;

namespace Product.Application.Modules.Category.Commands.Delete;
public record DeleteCategoryCommand(List<Guid> Ids) : ICommand<DeleteCategoryResult>
{
}

public record DeleteCategoryResult(List<Guid> Ids);