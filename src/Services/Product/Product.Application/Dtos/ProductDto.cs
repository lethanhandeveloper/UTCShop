using BuildingBlocks.Dtos;

namespace Product.Application.Dtos;
public class ProductDto : CommonDto
{
    public Guid Id { get; set; } = default!;
    public string Name { get; set; } = default!;
    public decimal Price { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
    public string Description { get; set; } = default!;
    public Guid CategoryId { get; set; } = default!;
    public string CategoryName { get; set; } = default!;
}
