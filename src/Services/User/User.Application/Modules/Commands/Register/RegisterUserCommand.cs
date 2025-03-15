using BuildingBlock.CQRS;
using System.ComponentModel.DataAnnotations.Schema;
using User.Application.Dtos;
using User.Domain.ValueObjects;

namespace User.Application.Modules.Commands.Register;
public class RegisterUserCommand : ICommand<UserDto>
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Age { get; set; }
    [Column(TypeName = "jsonb")]
    public List<Address> Addresses { get; set; }
}
