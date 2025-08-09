using BuildingBlocks.Attribute;
using BuildingBlocks.Controllers;
using BuildingBlocks.Pagination;
using BuildingBlocks.Services.CurrentUser;
using Microsoft.AspNetCore.Mvc;
using Product.Application.Dtos;
using Product.Application.Modules.Product.Commands.Create;
using Product.Application.Modules.Product.Commands.Delete;
using Product.Application.Modules.Product.Commands.Update;
using Product.Application.Modules.Product.Queries.GetProducts;
using Product.Application.Modules.Queries.GetProductById;
using System.Security.Claims;

namespace Product.API.Controllers;

[ApiController]
[ApiResultException]
[Route("api/[controller]")]
public class ProductController : BaseController
{
    ICurrentAccountService _currentUserService;

    public ProductController(ICurrentAccountService currentUserService)
    {
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
        var results = await Dispatcher.Send(query);
        return results;
    }

    [HttpPost("Create")]
    public async Task<Guid> Create([FromBody] ProductDto request)
    {
        var command = new CreateProductCommand(request);
        var results = await Dispatcher.Send(command);
        return results.Id;
    }

    [HttpPut("Update")]
    public async Task<Guid> Update([FromBody] ProductDto request)
    {
        var command = new UpdateProductCommand(request);
        var results = await Dispatcher.Send(command);
        return results.Id;
    }

    [HttpDelete("Delete")]
    public async Task<List<Guid>> Delete(List<Guid> Ids)
    {
        var command = new DeleteProductCommand(Ids);
        var results = await Dispatcher.Send(command);
        return results.Ids;
    }

    [HttpGet("{Id}")]
    public async Task<ProductDto> GetById(Guid Id)
    {
        return await Dispatcher.Send(new GetProductByIdQuery(Id));
    }
}