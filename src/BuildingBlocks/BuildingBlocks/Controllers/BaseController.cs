using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace BuildingBlocks.Controllers;

//[ApiController]
//[ApiResultException]
////[System.Web.Mvc.Route("api/[controller]")]
public class BaseController : Controller
{
    private IMediator _dispatcher;
    protected IMediator Dispatcher => _dispatcher ??= HttpContext.RequestServices.GetRequiredService<IMediator>();
}
