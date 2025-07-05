using Grpc.Core;
using Product.Application.Modules.Queries.GetProductById;

namespace Product.Grpc.Services;

public class GetProductInfoService(IMediator mediator) : Product.ProductBase
{
    public override async Task<ProductInfo> GetProductInfo(ProductRequest request, ServerCallContext context)
    {
        //var product = await _productRepository.GetProductInfoById(request.Id);
        var product = await mediator.Send(new GetProductByIdQuery(Guid.Parse(request.Id)));
        if (product == null)
        {
            throw new RpcException(new Status(StatusCode.NotFound, "Product not found"));
        }

        return new ProductInfo
        {
            Price = product.Price.ToString(),
            Name = product.Name,
            ImageUrl = product.ImageUrl,
            Description = product.Description,
        };
    }
}
