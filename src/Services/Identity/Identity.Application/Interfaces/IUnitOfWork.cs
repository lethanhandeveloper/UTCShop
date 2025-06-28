using Identity.Application.Interfaces.Repositories;

namespace Identity.Application.Interfaces;
public interface IUnitOfWork
{
    IUserRepository _userRepository { get; }
    IRefreshTokenRepository _refreshTokenRepository { get; }
    IUserRoleRepository _userRoleRepository { get; }
    IAccountRepository _accountRepository { get; }

    Task<int> SaveChangeAsync(CancellationToken cancellationToken);
}
