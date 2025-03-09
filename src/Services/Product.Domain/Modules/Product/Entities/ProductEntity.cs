namespace Product.Domain.Modules.Product.Entities;

public class ProductEntity : Entity<Guid>
{
    public string Name { get; set; } = default!;
    public decimal Price { get; set; }
    public string ImageUrl { get; set; } = default!;
    public string Description { get; set; } = default!;
    public Guid CategoryId { get; set; } = default!;
}
