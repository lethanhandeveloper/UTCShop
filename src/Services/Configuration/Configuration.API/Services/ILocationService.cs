namespace Configuration.API.Services;

public interface ILocationService
{
    public Task<bool> SyncLocation();
}
