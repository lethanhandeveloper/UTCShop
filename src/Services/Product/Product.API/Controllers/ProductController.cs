using BuildingBlocks.Pagination;
using Microsoft.AspNetCore.Mvc;
using Product.Application.Dtos;
using Product.Application.Modules.Commands;
using Product.Application.Modules.Commands.Create;
using Product.Application.Modules.Queries.GetProducts;

namespace Product.API.Controllers;
public class ProductController : Controller
{
    IMediator _mediator;

    public ProductController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost("Get")]
    public async Task<PaginatedResult<ProductDto>> Get([FromBody] PaginationRequest request)
    {
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

    [HttpPost("Delete")]
    public async Task<Guid> Delete([FromBody] ProductDto request)
    {
        var command = new DeleteProductCommand(request);
        var results = await _mediator.Send(command);
        return results.Id;
    }
}
