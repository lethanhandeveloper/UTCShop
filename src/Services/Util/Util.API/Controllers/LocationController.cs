using Microsoft.AspNetCore.Mvc;
using Util.API.Services;

namespace Util.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LocationController : Controller
{

    private readonly ILocationService _locationService;

    public LocationController(ILocationService locationService)
    {
        _locationService = locationService;
    }

    //[HttpGet("{dept}")]
    //public async Task<bool> Get(int dept)
    //{
    //    return await _locationService.GetLocationAsync(dept);
    //}

    [HttpGet("sync")]
    public async Task<bool> SyncLocation()
    {
        return await _locationService.SyncLocation();
    }
}
