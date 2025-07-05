using BuildingBlocks.Attribute;
using BuildingBlocks.Controllers;
using BuildingBlocks.Enums;
using BuildingBlocks.Services.CurrentUser;
using Cart.Application.Dtos;
using Cart.Application.Modules.Cart.Commands.AddToCart;
using Cart.Application.Modules.Cart.Commands.Update;
using Cart.Application.Modules.Cart.Queries.GetCategories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace Cart.API.Controllers;

[ApiController]
[ApiResultException]
[Authorize(Roles = nameof(RoleType.Customer))]
[Route("api/[controller]")]
public class CartController : BaseController
{
    ICurrentAccountService _currentAccountService;

    public CartController(ICurrentAccountService currentAccountService)
    {
        _currentAccountService = currentAccountService;
    }

    [HttpPost("Get")]
    public async Task<CartDto> Get()
    {
        var query = new GetCartByCustomerId(new CartDto
        {
            CustomerId = Guid.Parse(_currentAccountService.AccountId.ToString())
        });

        var res = await Dispatcher.Send(query);
        return res;
    }

    [HttpPost("add")]
    public async Task<Guid> Create([FromBody] CartDto request)
    {
        request.CustomerId = Guid.Parse(_currentAccountService.AccountId.ToString());
        var command = new AddToCartCommand(request);
        var results = await Dispatcher.Send(command);
        return results.Id;
    }

    [HttpPost("Update")]
    public async Task<Guid> Update([FromBody] CartDto request)
    {
        request.CustomerId = Guid.Parse(_currentAccountService.AccountId.ToString());
        var command = new UpdateCartCommand(request);
        var results = await Dispatcher.Send(command);
        return results.Id;
    }

}
