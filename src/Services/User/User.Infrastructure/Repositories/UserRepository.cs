using User.Application.Interfaces.Repositories;
using User.Domain;

namespace User.Infrastructure.Repositories;
public class UserRepository : IUserRepository
{
    public Task<Guid> CreateAsync(UserEntity entity, CancellationToken cancellation)
    {
        throw new NotImplementedException();
    }

    public Task<Guid> DeleteAsync(Guid Id, CancellationToken cancellation)
    {
        throw new NotImplementedException();
    }

    public Task<Guid> UpdateAsync(UserEntity entity, CancellationToken cancellation)
    {
        throw new NotImplementedException();
    }
}
