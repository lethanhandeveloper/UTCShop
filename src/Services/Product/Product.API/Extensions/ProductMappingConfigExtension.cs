using Mapster;
using Product.Application.Dtos;
using Product.Domain.Modules.Product.Entities;

namespace Product.API.Extensions;

public static class ProductMappingConfigExtension
{
    public static void RegisterMappings(TypeAdapterConfig config)
    {
        config.NewConfig<ProductEntity, ProductDto>()
            .Map(dest => dest.CategoryName, src => src.Category.Name);
    }
}
