using BuildingBlocks.Enums;

namespace Identity.Domain.Entities;
public class RoleEntity : Entity<Guid>
{
    public string Name { get; set; }
    public RoleType Type { get; set; }
    public Guid UserId { get; set; }
}
