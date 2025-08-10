using BuildingBlocks.CQRS;
using Configuration.Application.Dtos;

namespace Configuration.Application.Modules.Location.Queries;
public record GetDistrictsByProvinceIdQuery(Guid Id) : IQuery<List<DistrictDto>>;