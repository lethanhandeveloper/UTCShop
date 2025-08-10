using BuildingBlocks.CQRS;
using Configuration.Application.Dtos;

namespace Configuration.Application.Modules.Location.Queries.GetAllProvinces;
public record GetAllProvincesQuery() : IQuery<List<ProvinceDto>>;