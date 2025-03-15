using BuildingBlocks.Dtos;
using System.ComponentModel.DataAnnotations.Schema;
using User.Domain.ValueObjects;

namespace User.Application.Dtos;
public class UserDto : CommonDto
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Age { get; set; }
    [Column(TypeName = "jsonb")]
    public List<Address> Addresses { get; set; }
}
