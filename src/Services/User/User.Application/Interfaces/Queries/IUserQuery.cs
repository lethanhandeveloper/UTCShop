using BuildingBlocks.DBQueryAbtractions;
using User.Domain;

namespace User.Application.Interfaces.Queries;

public interface IUserQuery : IBaseQuery<UserEntity>
{
    Task<UserEntity> GetByUserName(string username);
}
