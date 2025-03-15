using BuildingBlocks.CQRS;
using BuildingBlocks.Pagination;
using Product.Application.Dtos;

namespace Product.Application.Modules.Queries.GetProducts;
public record GetProductsQuery(PaginationRequest PaginationRequest) : IQuery<PaginatedResult<ProductDto>>
{
}

//public record GetProductsResult(PaginatedResult<ProductEntity> Products);