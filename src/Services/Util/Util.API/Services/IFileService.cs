using BuildingBlocks.Dtos;

namespace Util.API.Services;

public interface IFileService
{
    public Task<string> Upload(UploadImageDto image);
}
