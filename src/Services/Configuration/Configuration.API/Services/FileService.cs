using BuildingBlocks.Dtos;
using BuildingBlocks.Exception;
using BuildingBlocks.Utils;

namespace Configuration.API.Services;

public class FileService : IFileService
{
    public async Task<string> Upload(UploadImageDto image)
    {
        if (image.File == null || image.File.FileName.Length == 0)
        {
            throw new BadRequestException("Please provide image");
        }

        var extension = Path.GetExtension(image.File.FileName);
        var fileName = Guid.NewGuid().ToString() + extension;

        var uploadPath = Path.Combine(SystemPathBuilder.GetBasePath() + "\\Services\\Util\\Util.API\\FileStorage", fileName);


        using (FileStream stream = new FileStream(uploadPath, FileMode.Create))
        {
            await image.File.CopyToAsync(stream);
            stream.Close();
        }

        return fileName;
    }
}
