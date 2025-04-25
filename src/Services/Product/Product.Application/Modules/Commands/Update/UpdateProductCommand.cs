using BuildingBlock.CQRS;
using Product.Application.Dtos;

namespace Product.Application.Modules.Commands.Create;
public record UpdateProductCommand(ProductDto Product) : ICommand<UpdateProductResult>
{
}

public record UpdateProductResult(Guid Id);