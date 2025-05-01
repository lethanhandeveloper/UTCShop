using Microsoft.AspNetCore.Http;

namespace BuildingBlocks.Dtos;
public class UploadImageDto
{
    public IFormFile File { get; set; }
}
