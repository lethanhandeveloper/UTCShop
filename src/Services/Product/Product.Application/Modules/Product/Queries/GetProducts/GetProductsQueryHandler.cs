using BuildingBlocks.CQRS;
using BuildingBlocks.Pagination;
using Mapster;
using Product.Application.Dtos;
using Product.Application.Interfaces.Queries;

namespace Product.Application.Modules.Product.Queries.GetProducts;
public class GetProductsQueryHandler(IProductQuery productQuery) : IQueryHandler<GetProductsQuery, PaginatedResult<ProductDto>>
{
    public async Task<PaginatedResult<ProductDto>> Handle(GetProductsQuery query, CancellationToken cancellationToken)
    {
        var pageSize = query.PaginationRequest.pageSize;
        var pageIndex = query.PaginationRequest.pageIndex;
        var filters = query.PaginationRequest.filters;

        var products = await productQuery.GetPagedAsync(filters, pageIndex, pageSize);
        var totalCount = products.Count();

        var productDtos = products.Adapt<List<ProductDto>>();

        foreach (var productDto in productDtos)
        {

        }

        return new PaginatedResult<ProductDto>(pageIndex, pageSize, totalCount, productDtos);
    }
}