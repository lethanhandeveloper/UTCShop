using BuildingBlocks.DBQueryAbtractions;
using Identity.Domain.Entities;

namespace Identity.Application.Interfaces.Queries;

public interface IRefreshTokenQuery : IBaseQuery<RefreshTokenEntity>
{
    public Task<RefreshTokenEntity> GetByTokenAsync(string token);
}
