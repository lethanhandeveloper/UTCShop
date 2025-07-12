using BuildingBlocks.Enums;
using Identity.Domain.ValueObjects;

namespace Identity.Application.Dtos;
public class UserAccountDto
{
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? UserName { get; set; }
    public string? Password { get; set; }
    public string? AccessToken { get; set; }
    public string? RefreshToken { get; set; }
    public string? Age { get; set; }
    public List<Address>? Addresses { get; set; }
    public AccountStatus AccountStatus { get; set; }
    public AccountType AccountType { get; set; }
    public RoleType RoleType { get; set; }
}
