using Microsoft.AspNetCore.Http;

namespace BuildingBlocks.Dtos;
public class UploadImageDto
{
    public IFormFile file { get; set; }
}
