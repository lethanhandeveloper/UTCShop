using BuildingBlocks.Controllers;
using BuildingBlocks.Dtos;
using BuildingBlocks.Enums;
using Identity.Application.Dtos;
using Identity.Application.Modules.User.Commands.Login;
using Identity.Application.Modules.User.Commands.Register;
using Identity.Application.Modules.User.Queries;
using Mapster;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Identity.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CustomerController : BaseController
{
    [HttpPost("Register")]
    public async Task<UserDto> Register(UserDto request)
    {
        var command = request.Adapt<RegisterUserCommand>();
        var results = await Dispatcher.Send(command);
        return results;
    }

    [HttpPost("Login")]
    public async Task<ApiResponse<UserDto>> Login(UserDto request)
    {
        var command = request.Adapt<LoginUserCommand>();
        var results = await Dispatcher.Send(command);
        return results;
    }

    [Authorize(Roles = nameof(RoleType.Customer))]
    [HttpGet("GetCustomerInfo")]
    public async Task<UserDto> GetCustomerInfo()
    {
        string accountId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var command = new GetUserInfoByAccountIdQuery(Guid.Parse(accountId));
        var results = await Dispatcher.Send(command);
        return results;
    }
}
