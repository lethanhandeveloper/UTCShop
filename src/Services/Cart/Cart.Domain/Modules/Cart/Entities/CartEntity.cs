using BuildingBlocks.DomainAbtractions;
using System.ComponentModel.DataAnnotations.Schema;

namespace Cart.Domain.Modules.Cart.Entities;

[Table("Cart", Schema = "Cart")]
public class CartEntity : Aggregate<Guid>
{
    public Guid CustomerId { get; set; }
    public int TotalPrice { get; set; }
    public ICollection<CartItemEntity> CartItems { get; set; } = new List<CartItemEntity>();
}