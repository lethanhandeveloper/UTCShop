using BuildingBlocks.DBQueryAbtractions;
using Identity.Domain.Entities;

namespace Identity.Application.Interfaces.Repositories;

public interface IRefreshTokenRepository : IBaseRepository<RefreshTokenEntity>
{
    public Task RemoveAsync(string token, CancellationToken cancellation);
}
