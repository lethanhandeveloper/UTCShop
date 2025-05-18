using BuildingBlocks.CQRS;
using Product.Application.Dtos;

namespace Product.Application.Modules.Category.Queries.GetLeafCategories;
public record GetLeafCategories : IQuery<List<CategoryDto>>;
