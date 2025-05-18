using BuildingBlocks.Dtos;
using Identity.Domain.ValueObjects;

namespace Identity.Application.Dtos;
public class UserDto : CommonDto
{
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? Password { get; set; }
    public string? AccessToken { get; set; }
    public string? RefreshToken { get; set; }
    public string? Age { get; set; }
    public List<Address>? Addresses { get; set; }
}
