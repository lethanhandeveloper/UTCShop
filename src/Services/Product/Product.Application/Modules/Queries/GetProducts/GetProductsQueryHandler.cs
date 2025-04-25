using BuildingBlocks.CQRS;
using BuildingBlocks.Pagination;
using Mapster;
using Product.Application.Dtos;
using Product.Interfaces.Repositories;

namespace Product.Application.Modules.Queries.GetProducts;
public class GetProductsQueryHandler(IProductQuery productQuery) : IQueryHandler<GetProductsQuery, PaginatedResult<ProductDto>>
{
    public async Task<PaginatedResult<ProductDto>> Handle(GetProductsQuery query, CancellationToken cancellationToken)
    {
        var pageSize = query.PaginationRequest.pageSize;
        var pageIndex = query.PaginationRequest.pageIndex;
        var filters = query.PaginationRequest.filters;
        var totalCount = await productQuery.CountAsync();

        var products = await productQuery.GetPagedAsync(filters, pageIndex, pageSize);
        var productDtos = products.Adapt<List<ProductDto>>();
        return new PaginatedResult<ProductDto>(pageIndex, pageSize, totalCount, productDtos);
    }
}