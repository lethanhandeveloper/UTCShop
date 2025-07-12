using Cart.Domain.Enums;

namespace Cart.Domain.Modules.Cart.Entities;
public class CartItemEntity : Entity<Guid>
{
    public Guid ProductId { get; set; }
    public Guid CartId { get; set; }
    public string Name { get; set; }
    public string ImageUrl { get; set; }
    public CartEntity Cart { get; set; }
    public int Price { get; set; }
    public int Quantity { get; set; }
    public CartItemStatus Status { get; set; }
}
