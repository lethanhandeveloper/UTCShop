using System;
using System.Collections.Generic;

namespace Base.Database;

public partial class User
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Age { get; set; } = null!;

    public string Addresses { get; set; } = null!;

    public int AccountType { get; set; }

    public DateTime? CreatedAt { get; set; }

    public Guid? CreatedBy { get; set; }

    public DateTime? LastUpdatedAt { get; set; }

    public Guid? LastUpdatedBy { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual ICollection<Account> Accounts { get; set; } = new List<Account>();
}
