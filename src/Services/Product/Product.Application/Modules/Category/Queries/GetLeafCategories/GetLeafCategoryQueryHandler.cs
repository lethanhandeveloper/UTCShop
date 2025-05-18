using BuildingBlocks.CQRS;
using Mapster;
using Product.Application.Dtos;
using Product.Application.Interfaces.Queries;

namespace Product.Application.Modules.Category.Queries.GetLeafCategories;
public class GetLeafCategoryQueryHandler(ICategoryQuery categoryQuery) : IQueryHandler<GetLeafCategories, List<CategoryDto>>
{
    public async Task<List<CategoryDto>> Handle(GetLeafCategories request, CancellationToken cancellationToken)
    {
        var categories = await categoryQuery.GetLeafCategories();
        return categories.Adapt<List<CategoryDto>>();
    }
}
