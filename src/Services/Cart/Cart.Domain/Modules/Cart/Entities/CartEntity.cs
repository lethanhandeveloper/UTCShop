using BuildingBlocks.DomainAbtractions;

namespace Cart.Domain.Modules.Cart.Entities;
public class CartEntity : Aggregate<Guid>
{
    public Guid CustomerId { get; set; }
    public List<CartItem> Items { get; set; } = new List<CartItem>();
}


public class CartItem
{
    public Guid Id { get; set; }
    public Guid ProductId { get; set; }
    public int Price { get; set; }
    public int Quantity { get; set; }
}