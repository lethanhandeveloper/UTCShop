using BuildingBlocks.CQRS;
using Configuration.Application.Dtos;
using Configuration.Application.Interfaces.Queries;
using Mapster;

namespace Configuration.Application.Modules.Location.Queries;

public class GetDistrictsByProvinceIdQueryHandler(IDistrictQuery districtQuery) : IQueryHandler<GetDistrictsByProvinceIdQuery, List<DistrictDto>>
{
    public async Task<List<DistrictDto>> Handle(GetDistrictsByProvinceIdQuery request, CancellationToken cancellationToken)
    {
        var districts = await districtQuery.GetByProvinceIdAsync(request.Id);
        return districts.Adapt<List<DistrictDto>>();
    }
}
