using BuildingBlocks.Services.FileStorage;
using Microsoft.AspNetCore.Mvc;

namespace Storage.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UploadController : ControllerBase
{
    private readonly IFileStorage _fileStorage;

    public UploadController(IFileStorage fileStorage)
    {
        _fileStorage = fileStorage;
    }

    [HttpPost("image")]
    public async Task<IActionResult> UploadImage([FromForm] IFormFile file)
    {
        var url = await _fileStorage.UploadImageAsync(file);
        return Ok(new { imageUrl = url });
    }
}

