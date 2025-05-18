using Identity.Domain.ValueObjects;
using System.ComponentModel.DataAnnotations.Schema;

namespace Identity.Domain.Entities;
public class UserEntity : Entity<Guid>
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string AccessToken { get; set; }
    public string RefreshToken { get; set; }
    public string HashPassword { get; set; }
    public string Age { get; set; }
    [Column(TypeName = "jsonb")]
    public List<Address> Addresses { get; set; }
    public bool IsActive { get; set; }
}
