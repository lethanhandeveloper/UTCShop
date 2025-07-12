using BuildingBlocks.Dtos;

namespace Cart.Application.Dtos;
public class CartDto : CommonDto
{
    public Guid? CustomerId { get; set; }
    public List<CartItemDto> Items { get; set; } = new List<CartItemDto>();
}
