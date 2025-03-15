using BuildingBlocks.DBQueryAbtractions;
using User.Domain;

namespace User.Application.Interfaces.Repositories;

public interface IUserRepository : IBaseRepository<UserEntity>
{

}
