using BuildingBlocks.Dtos;
using Identity.Application.Dtos;
using Identity.Application.Modules.User.Commands.Login;
using Identity.Application.Modules.User.Commands.Register;
using Mapster;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Identity.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CustomerController : Controller
{
    IMediator _mediator;

    public CustomerController(IMediator mediator)
    {
        _mediator = mediator;
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
