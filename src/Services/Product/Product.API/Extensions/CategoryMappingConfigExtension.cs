using Mapster;

namespace Product.API.Extensions;

public static class CategoryMappingConfigExtension
{
    public static void RegisterMappings(TypeAdapterConfig config)
    {
        //config.NewConfig<CategoryEntity, CategoryDto>()
        //    .Map(dest => dest.Name, src => src..Name);
    }
}
