using BuildingBlocks.Enums;

namespace Identity.Domain.Entities;
public class AccountEntity : Entity<Guid>
{
    public string Name { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string AccessToken { get; set; }
    public string RefreshToken { get; set; }
    public string HashPassword { get; set; }
    public string Age { get; set; }
    public Guid UserId { get; set; }
    public UserEntity User { get; set; }
    public AccountStatus Status { get; set; }
}
