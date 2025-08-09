using BuildingBlocks.Attribute;
using BuildingBlocks.Controllers;
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

    //[HttpGet("Get")]
    //public async Task<CartDto> Get()
    //{
    //    var query = new GetCartByCustomerIdQuery(new CartDto
    //    {
    //        CustomerId = Guid.Parse(_currentAccountService.AccountId.ToString())
    //    });

    //    var res = await Dispatcher.Send(query);
    //    return res;
    //}



}
