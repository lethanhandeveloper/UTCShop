using BuildingBlocks.BaseDBDataAccess.Repositories;
using Identity.Domain.Entities;

namespace Identity.Application.Interfaces.Repositories;

public interface IUserRepository : IBaseRepository<UserEntity>
{

}
