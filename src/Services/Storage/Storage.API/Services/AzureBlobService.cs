using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;

namespace Storage.API.Services;

public class AzureBlobService
{
    private readonly string _connectionString = "DefaultEndpointsProtocol=https;AccountName=utcshopstorage;AccountKey=KDKFOYLeRoMwU4Z81O70FbCeN2sruSZallfIVFhwgPXEQlFg+nFl02hXGKJ52Lf7FOSJQ5r0N6df+AStGtPr0A==;EndpointSuffix=core.windows.net";
    private readonly string _containerName = "product";

    public async Task<string> UploadImageAsync(IFormFile file)
    {
        if (file == null || file.Length == 0)
            throw new ArgumentException("File is empty");

        var blobServiceClient = new BlobServiceClient(_connectionString);
        var containerClient = blobServiceClient.GetBlobContainerClient(_containerName);
        await containerClient.CreateIfNotExistsAsync(PublicAccessType.Blob); // Cho phép truy cập public nếu cần


        string fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);

        var blobClient = containerClient.GetBlobClient(fileName);


        using (var stream = file.OpenReadStream())
        {
            await blobClient.UploadAsync(stream, new BlobHttpHeaders { ContentType = file.ContentType });
        }

        return blobClient.Uri.ToString();
    }
}
