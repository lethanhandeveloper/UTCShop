namespace Product.Domain.Modules.Product.Entities;
public class CategoryEntity : Entity<Guid>
{
    public string Name { get; set; } = default!;
    public string Description { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
    public Guid? ParentId { get; set; }
    public string? ParentName { get; set; }
    public CategoryEntity? ParentCategory { get; set; }
    public ICollection<CategoryEntity> ChildCategories { get; set; } = new List<CategoryEntity>();
    public ICollection<ProductEntity> Products { get; set; } = new List<ProductEntity>();
    public static CategoryEntity Create(string name, string description, string imageUrl, Guid? parentId)
    {
        var entity = new CategoryEntity
        {
            Name = name,
            Description = description,
            ImageUrl = imageUrl,
            ParentId = parentId
        };

        return entity;
    }
}
