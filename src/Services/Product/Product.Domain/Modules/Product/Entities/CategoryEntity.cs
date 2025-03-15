namespace Product.Domain.Modules.Product.Entities;
public class CategoryEntity : Entity<Guid>
{
    public string Name { get; set; } = default!;
    public string Description { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
    public Guid CategoryId { get; set; }
}
