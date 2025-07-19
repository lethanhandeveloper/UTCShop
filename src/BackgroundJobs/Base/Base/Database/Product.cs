using System;
using System.Collections.Generic;

namespace Base.Database;

public partial class Product
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    public decimal Price { get; set; }

    public string ImageUrl { get; set; } = null!;

    public string Description { get; set; } = null!;

    public Guid CategoryId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public Guid? CreatedBy { get; set; }

    public DateTime? LastUpdatedAt { get; set; }

    public Guid? LastUpdatedBy { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual Category Category { get; set; } = null!;
}
