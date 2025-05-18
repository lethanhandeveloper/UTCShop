using BuildingBlocks.DBQueryAbtractions;
using Identity.Domain.Entities;

namespace Identity.Application.Interfaces.Queries;

public interface IUserQuery : IBaseQuery<UserEntity>
{
    Task<UserEntity> GetByUserName(string username);
}
