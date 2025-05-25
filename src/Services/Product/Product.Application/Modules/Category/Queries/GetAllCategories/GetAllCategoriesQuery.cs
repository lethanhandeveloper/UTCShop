using BuildingBlocks.CQRS;
using Product.Application.Dtos;

namespace Product.Application.Modules.Category.Queries.GetLeafCategories;
public record GetAllCategoriesQuery : IQuery<List<CategoryDto>>;
