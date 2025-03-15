using BuildingBlocks.DBQueryAbtractions;
using User.Domain;

namespace User.Interfaces.Queries;

public interface IUserRepository : IBaseRepository<UserEntity>
{

}
