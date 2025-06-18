using BuildingBlocks.CQRS;
using BuildingBlocks.Pagination;
using Mapster;
using Product.Application.Dtos;
using Product.Application.Interfaces.Queries;

namespace Product.Application.Modules.Category.Queries.GetCategories;
public class GetCategoriesQueryHandler(ICategoryQuery categoryQuery) : IQueryHandler<GetCategoriesQuery, PaginatedResult<CategoryDto>>
{
    public async Task<PaginatedResult<CategoryDto>> Handle(GetCategoriesQuery query, CancellationToken cancellationToken)
    {
        var pageSize = query.PaginationRequest.pageSize;
        var pageIndex = query.PaginationRequest.pageIndex;
        var filters = query.PaginationRequest.filters;

        var result = await categoryQuery.GetPagedAsync(filters, pageIndex, pageSize);
        var totalCount = result.totalCount;

        var categoryDtos = result.data.Adapt<List<CategoryDto>>();
        return new PaginatedResult<CategoryDto>(pageIndex, pageSize, totalCount, categoryDtos);
    }
}