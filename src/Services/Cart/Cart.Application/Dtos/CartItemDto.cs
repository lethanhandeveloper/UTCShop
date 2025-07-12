using BuildingBlocks.Dtos;

namespace Cart.Application.Dtos;
public class CartItemDto : CommonDto
{
    public Guid ProductId { get; set; }
    public string Name { get; set; }
    public string ImageUrl { get; set; }
    public Guid CartId { get; set; }
    public decimal Price { get; set; }
    public int Quantity { get; set; }
}
