using BuildingBlocks.CQRS;
using BuildingBlocks.Pagination;
using Configuration.Application.Dtos;

namespace Configuration.Application.Modules.Location.Queries;
public record GetAllDistrictsQuery(PaginationRequest PaginationRequest) : IQuery<PaginatedResult<DistrictDto>>;