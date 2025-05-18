using BuildingBlocks.CQRS;
using BuildingBlocks.Pagination;
using Product.Application.Dtos;

namespace Product.Application.Modules.Category.Queries.GetCategories;
public record GetCategoriesQuery(PaginationRequest PaginationRequest) : IQuery<PaginatedResult<CategoryDto>>
{
}
