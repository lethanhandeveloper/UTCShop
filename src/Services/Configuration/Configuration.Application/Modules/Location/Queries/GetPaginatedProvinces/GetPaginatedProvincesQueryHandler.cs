using BuildingBlocks.CQRS;
using BuildingBlocks.Pagination;
using Configuration.Application.Dtos;
using Configuration.Application.Interfaces.Queries;
using Mapster;

namespace Configuration.Application.Modules.Location.Queries.GetPaginatedProvinces;

public class GetPaginatedProvincesQueryHandler(IProvinceQuery provinceQuery) : IQueryHandler<GetPaginatedProvincesQuery, PaginatedResult<ProvinceDto>>
{
    public async Task<PaginatedResult<ProvinceDto>> Handle(GetPaginatedProvincesQuery request, CancellationToken cancellationToken)
    {
        var pageSize = request.PaginationRequest.pageSize;
        var pageIndex = request.PaginationRequest.pageIndex;
        var filters = request.PaginationRequest.filters;
        var sorts = request.PaginationRequest.sortings;

        var result = await provinceQuery.GetPagedAsync(request.PaginationRequest.filters, request.PaginationRequest.sortings, request.PaginationRequest.pageIndex, request.PaginationRequest.pageSize);
        var totalCount = result.totalCount;
        var provinceDtos = result.data.Adapt<List<ProvinceDto>>();

        return new PaginatedResult<ProvinceDto>(pageIndex, pageSize, totalCount, provinceDtos);
    }
}
