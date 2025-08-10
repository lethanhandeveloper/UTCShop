using BuildingBlocks.CQRS;
using BuildingBlocks.Pagination;
using Configuration.Application.Dtos;
using Configuration.Application.Interfaces.Queries;
using Mapster;

namespace Configuration.Application.Modules.Location.Queries;

public class GetAllDistrictsQueryHandler(IDistrictQuery provinceQuery) : IQueryHandler<GetAllDistrictsQuery, PaginatedResult<DistrictDto>>
{
    public async Task<PaginatedResult<DistrictDto>> Handle(GetAllDistrictsQuery request, CancellationToken cancellationToken)
    {
        var pageSize = request.PaginationRequest.pageSize;
        var pageIndex = request.PaginationRequest.pageIndex;
        var filters = request.PaginationRequest.filters;
        var sorts = request.PaginationRequest.sortings;

        var result = await provinceQuery.GetPagedAsync(request.PaginationRequest.filters, request.PaginationRequest.sortings, request.PaginationRequest.pageIndex, request.PaginationRequest.pageSize);
        var totalCount = result.totalCount;
        var districtDtos = result.data.Adapt<List<DistrictDto>>();

        return new PaginatedResult<DistrictDto>(pageIndex, pageSize, totalCount, districtDtos);
    }
}
