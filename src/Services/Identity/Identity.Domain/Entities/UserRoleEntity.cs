using BuildingBlocks.Enums;

namespace Identity.Domain.Entities;
public class UserRoleEntity : Entity<Guid>
{
    public RoleType Type { get; set; }
    public Guid UserId { get; set; }
}
