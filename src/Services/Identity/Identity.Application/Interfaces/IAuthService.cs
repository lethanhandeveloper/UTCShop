using Identity.Domain.Entities;

namespace Identity.Application.Interfaces;
public interface IAuthService
{
    public Task<UserEntity> GenerateAccessToken(UserEntity user, List<RoleEntity> roles);
    public Task<UserEntity> Register(UserEntity user);
}
