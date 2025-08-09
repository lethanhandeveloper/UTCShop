using Microsoft.AspNetCore.Http;

namespace BuildingBlocks.Services.FileStorage;

public interface IFileStorage
{
    public Task<string> UploadImageAsync(IFormFile file);
}
