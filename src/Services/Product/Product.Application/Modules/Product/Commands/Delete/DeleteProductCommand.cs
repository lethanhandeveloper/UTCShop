using BuildingBlock.CQRS;

namespace Product.Application.Modules.Product.Commands.Delete;
public record DeleteProductCommand(List<Guid> Ids) : ICommand<DeleteProductResult>
{
}

public record DeleteProductResult(List<Guid> Ids);