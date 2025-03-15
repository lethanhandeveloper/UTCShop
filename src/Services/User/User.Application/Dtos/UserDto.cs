using BuildingBlocks.Dtos;
using User.Domain.ValueObjects;

namespace User.Application.Dtos;
public class UserDto : CommonDto
{
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? Password { get; set; }
    public string? JwtToken { get; set; }
    public string? Age { get; set; }
    public List<Address>? Addresses { get; set; }
}
