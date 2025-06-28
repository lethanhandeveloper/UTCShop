using BuildingBlock.CQRS;
using BuildingBlocks.Enums;
using Identity.Application.Dtos;
using Identity.Domain.ValueObjects;
using System.ComponentModel.DataAnnotations.Schema;

namespace Identity.Application.Modules.User.Commands.Register;
public class RegisterUserCommand : ICommand<UserDto>
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Age { get; set; }
    [Column(TypeName = "jsonb")]
    public List<Address> Addresses { get; set; }
    public AccountType AccountType { get; set; }
}
