using BuildingBlocks.Attribute;
using BuildingBlocks.Controllers;
using BuildingBlocks.Dtos;
using Identity.Application.Dtos;
using Identity.Application.Modules.Account.Commands.Login;
using Identity.Application.Modules.Account.Commands.Register;
using Identity.Application.Modules.Account.Commands.RevokeRefreshToken.Login;
using Identity.Application.Modules.User.Commands.Login;
using Mapster;
using Microsoft.AspNetCore.Mvc;

namespace Identity.API.Controllers;

[ApiController]
[ApiResultException]
[Route("api/[controller]")]
public class AccountController : BaseController
{
    [HttpPost("Register")]
    public async Task<UserAccountDto> Register(UserAccountDto request)
    {
        var command = request.Adapt<RegisterCommand>();
        var results = await Dispatcher.Send(command);
        return results;
    }

    [HttpPost("Login")]
    public async Task<ApiResponse<UserAccountDto>> Login(UserAccountDto request)
    {
        var command = request.Adapt<LoginCommand>();
        var results = await Dispatcher.Send(command);

        AttachTokenToResponse(results.Data.AccessToken, results.Data.RefreshToken);
        return results;
    }

    [HttpPost("RefreshToken")]
    public async Task<ApiResponse<UserAccountDto>> RefreshToken()
    {
        var refreshToken = Request.Cookies["refreshToken"];

        var command = new RefreshTokenCommand
        {
            RefreshToken = refreshToken
        };

        var results = await Dispatcher.Send(command);
        AttachTokenToResponse(results.Data.AccessToken, results.Data.RefreshToken);
        return results;
    }

    [HttpGet("RevokeToken")]
    public async Task<ApiResponse<bool>> RevokeRefreshToken()
    {
        var accessToken = Request.Cookies["accessToken"];
        var refreshToken = Request.Cookies["refreshToken"];

        var command = new RevokeRefreshTokenCommand
        {
            RefreshToken = refreshToken
        };

        var results = await Dispatcher.Send(command);

        long unixTimeSeconds = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
        var expires = DateTimeOffset.FromUnixTimeSeconds(unixTimeSeconds);

        Response.Cookies.Append("accessToken", accessToken, new CookieOptions
        {
            HttpOnly = true,
            Secure = true,
            SameSite = SameSiteMode.None,
            Expires = expires
        });

        Response.Cookies.Append("refreshToken", refreshToken, new CookieOptions
        {
            HttpOnly = true,
            Secure = true,
            SameSite = SameSiteMode.None,
            Expires = expires
        });

        return results;
    }

    //[HttpPost("RefreshToken")]
    //public async Task<ApiResponse<UserDto>> RefreshToken()
    //{
    //    var refreshToken = Request.Cookies["refreshToken"];

    //    var command = new RefreshTokenCommand
    //    {
    //        RefreshToken = refreshToken
    //    };

    //    var results = await _mediator.Send(command);
    //    AttachTokenToResponse(results.Data.AccessToken, results.Data.RefreshToken);
    //    return results;
    //}

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

    //[Authorize(Roles = nameof(RoleType.Admin))]
    //[HttpGet("GetAdminInfo")]
    //public async Task<UserDto> GetAdminInfo()
    //{
    //    string userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
    //    var command = new GetAdminInfoByIdQuery(Guid.Parse(userId));
    //    var results = await _mediator.Send(command);
    //    return results;
    //}
}
