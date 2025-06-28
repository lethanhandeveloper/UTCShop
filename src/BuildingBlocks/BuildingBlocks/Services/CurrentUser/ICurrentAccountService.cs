namespace BuildingBlocks.Services.CurrentUser;
public interface ICurrentAccountService
{
    Guid? AccountId { get; }
    string? UserName { get; }
    string? Email { get; }
    bool IsAuthenticated { get; }
}
