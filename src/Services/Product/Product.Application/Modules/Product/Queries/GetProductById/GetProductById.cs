using BuildingBlocks.CQRS;
using Product.Application.Dtos;

namespace Product.Application.Modules.Queries.GetProductById;
public record GetProductByIdQuery(Guid Id) : IQuery<ProductDto>
{
}

