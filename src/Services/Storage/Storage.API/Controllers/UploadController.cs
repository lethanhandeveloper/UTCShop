using Microsoft.AspNetCore.Mvc;
using Storage.API.Services;

namespace Storage.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UploadController : ControllerBase
{
    private readonly AzureBlobService _blobService;

    public UploadController(AzureBlobService blobService)
    {
        _blobService = blobService;
    }

    [HttpPost("image")]
    public async Task<IActionResult> UploadImage([FromForm] IFormFile file)
    {
        var url = await _blobService.UploadImageAsync(file);
        return Ok(new { imageUrl = url });
    }
}

