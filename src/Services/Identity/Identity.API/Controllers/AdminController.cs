using BuildingBlocks.Attribute;
using BuildingBlocks.Enums;
using Identity.Application.Dtos;
using Identity.Application.Modules.Admin.Commands.Create;
using Identity.Application.Modules.Admin.Queries;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Identity.API.Controllers;

[ApiController]
[ApiResultException]
[Route("api/[controller]")]
public class AdminController : Controller
{
    IMediator _mediator;

    public AdminController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost("Create")]
    public async Task<UserDto> Register(UserDto request)
    {
        var command = request.Adapt<CreateAdminCommand>();
        var results = await _mediator.Send(command);
        return results;
    }

    [Authorize(Roles = nameof(RoleType.Admin))]
    [HttpGet("GetAdminInfo")]
    public async Task<UserDto> GetAdminInfo()
    {
        string userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        var command = new GetAdminInfoByIdQuery(Guid.Parse(userId));
        var results = await _mediator.Send(command);
        return results;
    }
}
