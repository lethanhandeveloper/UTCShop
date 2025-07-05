using BuildingBlocks.DomainAbtractions;

namespace Cart.Domain.Modules.Cart.Entities;
public class CartEntity : Aggregate<Guid>
{
    public Guid CustomerId { get; set; }
    public int TotalPrice { get; set; }
    public ICollection<CartItemEntity> CartItems { get; set; } = new List<CartItemEntity>();
}