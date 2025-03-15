using BuildingBlock.CQRS;
using Product.Application.Dtos;

namespace Product.Application.Modules.Commands;
public record DeleteProductCommand(ProductDto Product) : ICommand<DeleteProductResult>
{
}

public record DeleteProductResult(Guid Id);