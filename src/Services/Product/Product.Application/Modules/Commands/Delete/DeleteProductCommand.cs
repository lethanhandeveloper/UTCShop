using BuildingBlock.CQRS;

namespace Product.Application.Modules.Commands;
public record DeleteProductCommand(List<Guid> Ids) : ICommand<DeleteProductResult>
{
}

public record DeleteProductResult(List<Guid> Ids);