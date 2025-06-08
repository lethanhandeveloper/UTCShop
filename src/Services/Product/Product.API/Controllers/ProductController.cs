using BuildingBlocks.Attribute;
using BuildingBlocks.Enums;
using BuildingBlocks.Pagination;
using BuildingBlocks.Services.CurrentUser;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Product.Application.Dtos;
using Product.Application.Modules.Category.Commands.Delete;
using Product.Application.Modules.Product.Commands.Create;
using Product.Application.Modules.Product.Commands.Update;
using Product.Application.Modules.Product.Queries.GetProducts;
using System.Security.Claims;

namespace Product.API.Controllers;

[ApiController]
[ApiResultException]
[Route("api/[controller]")]
public class ProductController : Controller
{
    IMediator _mediator;
    ICurrentUserService _currentUserService;

    public ProductController(IMediator mediator, ICurrentUserService currentUserService)
    {
        _mediator = mediator;
        _currentUserService = currentUserService;
    }

    [HttpPost("Get")]
    //[Authorize(Roles = "Admin")]
    public async Task<PaginatedResult<ProductDto>> Get([FromBody] PaginationRequest request)
    {
        var roles = User.Claims
        .Where(c => c.Type == ClaimTypes.Role || c.Type == "role")
        .Select(c => c.Value)
        .ToList();
        var query = new GetProductsQuery(request);
        var results = await _mediator.Send(query);
        return results;
    }

    [HttpPost("Create")]
    public async Task<Guid> Create([FromBody] ProductDto request)
    {
        var command = new CreateProductCommand(request);
        var results = await _mediator.Send(command);
        return results.Id;
    }

    [HttpPut("Update")]
    public async Task<Guid> Update([FromBody] ProductDto request)
    {
        var command = new UpdateProductCommand(request);
        var results = await _mediator.Send(command);
        return results.Id;
    }

    [HttpDelete("Delete")]
    public async Task<List<Guid>> Delete(List<Guid> Ids)
    {
        var command = new DeleteCategoryCommand(Ids);
        var results = await _mediator.Send(command);
        return results.Ids;
    }

    [HttpGet("{Id}")]
    public async Task<List<Guid>> GetById(Guid Id)
    {
        throw new NotImplementedException();
    }


    [HttpGet("test")]
    [Authorize(Roles = nameof(RoleType.Admin))]

    public async Task<Guid> Test()
    {
        var currentUserId = _currentUserService.UserId;
        return (Guid)currentUserId;
    }
}