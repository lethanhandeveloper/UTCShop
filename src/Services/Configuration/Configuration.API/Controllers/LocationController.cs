using BuildingBlocks.Attribute;
using BuildingBlocks.Controllers;
using BuildingBlocks.Pagination;
using Configuration.Application.Dtos;
using Configuration.Application.Modules.Location.Commands;
using Configuration.Application.Modules.Location.Queries;
using Configuration.Application.Modules.Location.Queries.GetAllProvinces;
using Configuration.Application.Modules.Location.Queries.GetPaginatedProvinces;
using Microsoft.AspNetCore.Mvc;


namespace Configuration.API.Controllers;

[ApiController]
[ApiResultException]
[Route("api/[controller]")]
public class LocationController : BaseController
{

    public LocationController()
    {

    }

    [HttpGet("province/{id}")]
    public async Task<List<ProvinceDto>> GetById(Guid Id)
    {
        return await Dispatcher.Send(new GetProvinceByIdQuery(Id));
    }

    [HttpPost("province/paginate")]
    public async Task<PaginatedResult<ProvinceDto>> GetPaginatedProvinces([FromBody] PaginationRequest request)
    {
        return await Dispatcher.Send(new GetPaginatedProvincesQuery(request));
    }


    [HttpGet("province/all")]
    public async Task<List<ProvinceDto>> GetAllProvinces()
    {
        return await Dispatcher.Send(new GetAllProvincesQuery());
    }

    [HttpGet("district/province/{Id}")]
    public async Task<List<DistrictDto>> GetDistrictByProvinceId(Guid Id)
    {
        return await Dispatcher.Send(new GetDistrictsByProvinceIdQuery(Id));
    }

    [HttpGet("sync")]
    public async Task<bool> SyncLocation()
    {
        return await Dispatcher.Send(new SyncLocationCommand());
    }

}
