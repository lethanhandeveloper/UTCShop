using BuildingBlocks.Dtos;

namespace Product.Application.Dtos;
public class CategoryDto : CommonDto
{
    public string Name { get; set; } = default!;
    public string Description { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
    public Guid? ParentId { get; set; } = null;
}
