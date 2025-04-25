using BuildingBlocks.Attribute;
using BuildingBlocks.Dtos;
using BuildingBlocks.Pagination;
using Microsoft.AspNetCore.Mvc;
using Product.Application.Dtos;
using Product.Application.Modules.Commands;
using Product.Application.Modules.Commands.Create;
using Product.Application.Modules.Queries.GetProducts;

namespace Product.API.Controllers;

[ApiController]
[ApiResultException]
[Route("api/[controller]")]
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

    [HttpPost("Update")]
    public async Task<Guid> Update([FromBody] ProductDto request)
    {
        var command = new UpdateProductCommand(request);
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

    [HttpPost("Upload")]
    public async Task<ApiResponse<string>> UploadThumbnailImage([FromForm] UploadImageDto image)
    {
        try
        {
            if (image.file == null || image.file.FileName.Length == 0)
            {
                return new ApiResponse<string>
                {
                    Success = false,
                    Data = null,
                    Message = "Image is empty",
                    StatusCode = BuildingBlocks.Enums.HttpStatusCodeEnum.BadRequest
                };
            }

            var extension = Path.GetExtension(image.file.FileName);
            var fileName = Guid.NewGuid().ToString() + extension;

            var uploadPath = Path.Combine("C:\\PProjects\\UTCShop\\src\\BuildingBlocks\\BuildingBlocks\\Images", fileName);


            using (FileStream stream = new FileStream(uploadPath, FileMode.Create))
            {
                await image.file.CopyToAsync(stream);
                stream.Close();
            }

            return new ApiResponse<string>
            {
                Success = true,
                Data = fileName,
                Message = "Upload successfully",
                StatusCode = BuildingBlocks.Enums.HttpStatusCodeEnum.Created
            };
        }
        catch (Exception ex)
        {
            return new ApiResponse<string>
            {
                Success = true,
                Data = null,
                Message = ex.Message.ToString(),
                StatusCode = BuildingBlocks.Enums.HttpStatusCodeEnum.InternalServerError
            };
        }

    }
}
