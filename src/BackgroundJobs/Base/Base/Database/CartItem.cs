using System;
using System.Collections.Generic;

namespace Base.Database;

public partial class CartItem
{
    public Guid Id { get; set; }

    public Guid ProductId { get; set; }

    public Guid CartId { get; set; }

    public int Price { get; set; }

    public int Quantity { get; set; }

    public DateTime? CreatedAt { get; set; }

    public Guid? CreatedBy { get; set; }

    public DateTime? LastUpdatedAt { get; set; }

    public Guid? LastUpdatedBy { get; set; }

    public bool? IsDeleted { get; set; }

    public int Status { get; set; }

    public string Name { get; set; } = null!;

    public string ImageUrl { get; set; } = null!;

    public virtual Cart Cart { get; set; } = null!;
}
