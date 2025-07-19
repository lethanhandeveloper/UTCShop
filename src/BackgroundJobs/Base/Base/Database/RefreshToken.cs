using System;
using System.Collections.Generic;

namespace Base.Database;

public partial class RefreshToken
{
    public Guid Id { get; set; }

    public string Token { get; set; } = null!;

    public DateTime Expire { get; set; }

    public Guid AccountId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public Guid? CreatedBy { get; set; }

    public DateTime? LastUpdatedAt { get; set; }

    public Guid? LastUpdatedBy { get; set; }

    public bool? IsDeleted { get; set; }
}
