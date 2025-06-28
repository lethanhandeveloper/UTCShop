namespace Identity.Domain.Entities;
public class RefreshTokenEntity : Entity<Guid>
{
    public string Token { get; set; } = null!;
    public DateTime Expire { get; set; }
    public Guid AccountId { get; set; }
}
