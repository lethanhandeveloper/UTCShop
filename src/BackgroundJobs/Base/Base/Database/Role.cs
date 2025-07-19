using System;
using System.Collections.Generic;

namespace Base.Database;

public partial class Role
{
    public Guid Id { get; set; }

    public int Type { get; set; }

    public Guid UserId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public Guid? CreatedBy { get; set; }

    public DateTime? LastUpdatedAt { get; set; }

    public Guid? LastUpdatedBy { get; set; }

    public bool? IsDeleted { get; set; }
}
