using BuildingBlocks.CQRS;
using Mapster;
using Product.Application.Dtos;
using Product.Application.Interfaces.Queries;

namespace Product.Application.Modules.Category.Queries.GetLeafCategories;
public class GetAllCategoryQueryHandler(ICategoryQuery categoryQuery) : IQueryHandler<GetAllCategoriesQuery, List<CategoryDto>>
{
    public async Task<List<CategoryDto>> Handle(GetAllCategoriesQuery request, CancellationToken cancellationToken)
    {
        var categories = await categoryQuery.GetAllAsync();
        return categories.Adapt<List<CategoryDto>>();
    }
}
