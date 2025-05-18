using BuildingBlocks.Attribute;
using BuildingBlocks.Dtos;
using BuildingBlocks.Enums;
using Identity.Application.Dtos;
using Identity.Application.Modules.Admin.Commands.Create;
using Identity.Application.Modules.Admin.Queries;
using Identity.Application.Modules.User.Commands.Login;
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

    [HttpPost("Login")]
    public async Task<ApiResponse<UserDto>> Login(UserDto request)
    {
        var command = request.Adapt<LoginUserCommand>();
        var results = await _mediator.Send(command);

        AttachTokenToResponse(results.Data.AccessToken, results.Data.RefreshToken);
        return results;
    }

    [HttpPost("RefreshToken")]
    public async Task<ApiResponse<UserDto>> RefreshToken()
    {
        var refreshToken = Request.Cookies["refreshToken"];

        var command = new RefreshTokenCommand
        {
            RefreshToken = refreshToken
        };

        var results = await _mediator.Send(command);
        AttachTokenToResponse(results.Data.AccessToken, results.Data.RefreshToken);
        return results;
    }

    [NonAction]
    public void AttachTokenToResponse(string token, string refreshToken)
    {
        Response.Cookies.Append("accessToken", token, new CookieOptions
        {
            HttpOnly = true,
            Secure = true,
            SameSite = SameSiteMode.None,
            Expires = DateTime.UtcNow.AddMinutes(15)
        });

        Response.Cookies.Append("refreshToken", refreshToken, new CookieOptions
        {
            HttpOnly = true,
            Secure = true,
            SameSite = SameSiteMode.None,
            Expires = DateTime.UtcNow.AddDays(7)
        });
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
