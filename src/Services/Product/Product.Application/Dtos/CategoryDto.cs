using BuildingBlocks.Dtos;

namespace Product.Application.Dtos;
public class CategoryDto : CommonDto
{
    public string Name { get; set; } = default!;
    public string Description { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
    public Guid? ParentId { get; set; } = null;
    public string? ParentName { get; set; } = null;
    public List<IdAndNameDto> ChildCategories { get; set; } = new List<IdAndNameDto>();
}
