using BuildingBlocks.DomainAbtractions;

namespace Product.Domain.Modules.Product.Entities;

public class ProductEntity : Aggregate<Guid>
{
    public string Name { get; set; } = default!;
    public decimal Price { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
    public string Description { get; set; } = default!;
    public Guid CategoryId { get; set; }


    public static ProductEntity Create(string name, decimal price, string imageUrl, string description, Guid categoryId)
    {
        var entity = new ProductEntity
        {
            Name = name,
            Price = price,
            ImageUrl = imageUrl,
            Description = description,
            CategoryId = categoryId,
            IsDeleted = false,
            CreatedAt = DateTime.UtcNow,
            LastUpdatedAt = DateTime.UtcNow
        };

        return entity;
    }
}
