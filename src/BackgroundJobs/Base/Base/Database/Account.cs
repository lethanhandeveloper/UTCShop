using System;
using System.Collections.Generic;

namespace Base.Database;

public partial class Account
{
    public Guid Id { get; set; }

    public string UserName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string HashPassword { get; set; } = null!;

    public Guid UserId { get; set; }

    public int Status { get; set; }

    public DateTime? CreatedAt { get; set; }

    public Guid? CreatedBy { get; set; }

    public DateTime? LastUpdatedAt { get; set; }

    public Guid? LastUpdatedBy { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual User User { get; set; } = null!;
}
