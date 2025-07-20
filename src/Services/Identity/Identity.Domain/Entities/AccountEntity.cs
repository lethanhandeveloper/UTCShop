using BuildingBlocks.Enums;

namespace Identity.Domain.Entities;
public class AccountEntity : Entity<Guid>
{
    public string UserName { get; set; }
    public string Email { get; set; }
    public string AccessToken { get; set; }
    public string RefreshToken { get; set; }
    public string HashPassword { get; set; }
    public Guid UserId { get; set; }
    public UserEntity User { get; set; }
    public AccountStatus Status { get; set; }
}
