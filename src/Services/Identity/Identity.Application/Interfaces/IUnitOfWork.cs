using Identity.Application.Interfaces.Repositories;

namespace Identity.Application.Interfaces;
public interface IUnitOfWork
{
    IUserRepository _userRepository { get; }
    IRefreshTokenRepository _refreshTokenRepository { get; }
    IRoleRepository _roleRepository { get; }

    Task<int> SaveChangeAsync(CancellationToken cancellationToken);
}
