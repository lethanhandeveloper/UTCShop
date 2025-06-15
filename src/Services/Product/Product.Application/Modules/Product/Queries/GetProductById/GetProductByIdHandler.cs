using BuildingBlocks.CQRS;
using BuildingBlocks.Exception;
using Mapster;
using Product.Application.Dtos;
using Product.Application.Interfaces.Queries;

namespace Product.Application.Modules.Queries.GetProductById;
public class GetProductByIdHandler(IProductQuery productQuery) : IQueryHandler<GetProductByIdQuery, ProductDto>
{
    public async Task<ProductDto> Handle(GetProductByIdQuery request, CancellationToken cancellationToken)
    {
        var product = await productQuery.GetByIdAsync(request.Id);
        if (product == null)
        {
            throw new NotFoundException($"Product with ID {request.Id} not found.");
        }

        return product.Adapt<ProductDto>();
    }
}
