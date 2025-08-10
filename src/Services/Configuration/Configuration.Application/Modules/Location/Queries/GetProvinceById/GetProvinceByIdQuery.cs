using BuildingBlocks.CQRS;
using Configuration.Application.Dtos;

namespace Configuration.Application.Modules.Location.Queries;
public record GetProvinceByIdQuery(Guid Id) : IQuery<List<ProvinceDto>>;