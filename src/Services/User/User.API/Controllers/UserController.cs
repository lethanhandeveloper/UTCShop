using BuildingBlocks.Dtos;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using User.Application.Dtos;
using User.Application.Modules.Commands.Login;
using User.Application.Modules.Commands.Register;

namespace User.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : Controller
{
    IMediator _mediator;

    public UserController(IMediator mediator)
    {
        _mediator=mediator;
    }

    [HttpPost("Register")]
    public async Task<UserDto> Register(UserDto request)
    {
        var command = request.Adapt<RegisterUserCommand>();
        var results = await _mediator.Send(command);
        return results;
    }

    [HttpPost("Login")]
    public async Task<ApiResponse<UserDto>> Login(UserDto request)
    {
        var command = request.Adapt<LoginUserCommand>();
        var results = await _mediator.Send(command);
        return results;
    }
}
