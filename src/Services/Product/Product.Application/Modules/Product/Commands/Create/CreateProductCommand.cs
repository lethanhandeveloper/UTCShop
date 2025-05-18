using BuildingBlock.CQRS;
using Product.Application.Dtos;

namespace Product.Application.Modules.Product.Commands.Create;
public record CreateProductCommand(ProductDto Product) : ICommand<CreateProductResult>
{
}

public record CreateProductResult(Guid Id);