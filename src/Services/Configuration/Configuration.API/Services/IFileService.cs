using BuildingBlocks.Dtos;

namespace Configuration.API.Services;

public interface IFileService
{
    public Task<string> Upload(UploadImageDto image);
}
