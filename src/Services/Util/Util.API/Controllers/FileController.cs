using BuildingBlocks.Dtos;
using Microsoft.AspNetCore.Mvc;
using Util.API.Services;

namespace Util.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FileController : Controller
{
    private readonly IFileService _fileService;

    public FileController(IFileService fileService)
    {
        _fileService = fileService;
    }

    [HttpPost("Upload")]
    public async Task<ApiResponse<string>> UploadFile([FromForm] UploadImageDto file)
    {
        string fileName = await _fileService.Upload(file);
        return new ApiResponse<string>
        {
            Success = true,
            Data = fileName,
            Message = "Upload successfully",
            StatusCode = BuildingBlocks.Enums.HttpStatusCodeEnum.Created
        };
    }
}
