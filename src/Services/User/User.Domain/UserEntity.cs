using BuildingBlocks.DomainAbtractions;
using System.ComponentModel.DataAnnotations.Schema;
using User.Domain.ValueObjects;

namespace User.Domain;
public class UserEntity : Aggregate<Guid>
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Age { get; set; }
    [Column(TypeName = "jsonb")]
    public List<Address> Addresses { get; set; }
    public bool IsActive { get; set; }
}
