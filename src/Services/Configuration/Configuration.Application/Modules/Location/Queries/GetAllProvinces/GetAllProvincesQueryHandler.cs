using BuildingBlocks.CQRS;
using Configuration.Application.Dtos;
using Configuration.Application.Interfaces.Queries;
using Configuration.Application.Modules.Location.Queries.GetAllProvinces;
using Mapster;

namespace Configuration.Application.Modules.Location.Queries.GetPaginatedProvinces;

public class GetAllProvincesQueryHandler(IProvinceQuery provinceQuery) : IQueryHandler<GetAllProvincesQuery, List<ProvinceDto>>
{
    public async Task<List<ProvinceDto>> Handle(GetAllProvincesQuery request, CancellationToken cancellationToken)
    {
        var result = await provinceQuery.GetAllAsync();
        var provinceDtos = result.Adapt<List<ProvinceDto>>();

        return provinceDtos;
    }
}
