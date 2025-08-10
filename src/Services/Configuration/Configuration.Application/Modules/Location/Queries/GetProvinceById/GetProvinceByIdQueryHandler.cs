using BuildingBlocks.CQRS;
using Configuration.Application.Dtos;
using Configuration.Application.Interfaces.Queries;
using Mapster;

namespace Configuration.Application.Modules.Location.Queries;

public class GetProvinceByIdQueryHandler(IProvinceQuery provinceQuery) : IQueryHandler<GetProvinceByIdQuery, List<ProvinceDto>>
{
    public async Task<List<ProvinceDto>> Handle(GetProvinceByIdQuery request, CancellationToken cancellationToken)
    {
        var provinces = await provinceQuery.GetByIdAsync(request.Id);
        return provinces.Adapt<List<ProvinceDto>>();
    }
}
