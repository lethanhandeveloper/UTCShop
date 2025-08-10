using BuildingBlocks.CQRS;
using BuildingBlocks.Pagination;
using Configuration.Application.Dtos;

namespace Configuration.Application.Modules.Location.Queries.GetPaginatedProvinces;
public record GetPaginatedProvincesQuery(PaginationRequest PaginationRequest) : IQuery<PaginatedResult<ProvinceDto>>;