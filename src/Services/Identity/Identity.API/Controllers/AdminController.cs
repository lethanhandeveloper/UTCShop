using BuildingBlocks.Attribute;
using BuildingBlocks.Controllers;
using BuildingBlocks.Enums;
using Identity.Application.Dtos;
using Identity.Application.Modules.Admin.Commands.Create;
using Identity.Application.Modules.User.Queries;
using Mapster;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Identity.API.Controllers;

[ApiController]
[ApiResultException]
[Route("api/[controller]")]
public class AdminController : BaseController
{
    [HttpPost("Create")]
    public async Task<UserDto> Register(UserDto request)
    {
        var command = request.Adapt<CreateAdminCommand>();
        var results = await Dispatcher.Send(command);
        return results;
    }

    [Authorize(Roles = nameof(RoleType.Admin))]
    [HttpGet("GetAdminInfo")]
    public async Task<UserDto> GetAdminInfo()
    {
        string accountId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var command = new GetUserInfoByAccountIdQuery(Guid.Parse(accountId));
        var results = await Dispatcher.Send(command);
        return results;
    }
}
