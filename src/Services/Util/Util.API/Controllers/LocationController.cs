using Microsoft.AspNetCore.Mvc;
using Refit;

namespace Util.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LocationController : Controller
{

    private readonly ILocationApi _myApi;

    public LocationController(ILocationApi myApi)
    {
        _myApi = myApi;
    }

    [HttpGet("{dept}")]
    public async Task<IActionResult> Get(int dept)
    {
        var user = await _myApi.GetLocationAsync(dept);
        return Ok(user);
    }
}


public interface ILocationApi
{
    [Get("/")]
    Task<List<dynamic>> GetLocationAsync([Query] int? depth);
}
