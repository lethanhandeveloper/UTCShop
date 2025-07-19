using System;
using System.Collections.Generic;

namespace Base.Database;

public partial class Cart
{
    public Guid Id { get; set; }

    public Guid CustomerId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public Guid? CreatedBy { get; set; }

    public DateTime? LastUpdatedAt { get; set; }

    public Guid? LastUpdatedBy { get; set; }

    public bool? IsDeleted { get; set; }

    public int TotalPrice { get; set; }

    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();
}
