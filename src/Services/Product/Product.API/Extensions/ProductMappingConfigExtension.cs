using Mapster;
using Product.Application.Dtos;
using Product.Domain.Modules.Product.Entities;

namespace Product.API.Extensions;

public static class ProductMappingConfigExtension
{
    public static void RegisterMappings(TypeAdapterConfig config)
    {
        config.NewConfig<ProductEntity, ProductDto>()
            .Map(member: dest => dest.CategoryName, src => src.Category.Name);

        config.NewConfig<CategoryEntity, CategoryDto>()
            .Map(member: dest => dest.ParentId, src => src.ParentCategory.Id)
            .Map(member: dest => dest.ParentName, src => src.ParentCategory.Name);
    }
}
