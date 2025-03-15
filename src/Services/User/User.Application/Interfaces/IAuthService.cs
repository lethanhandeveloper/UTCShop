using User.Domain;

namespace User.Application.Interfaces;
public interface IAuthService
{
    public Task<UserEntity> GenerateJwtToken(UserEntity user);
    public Task<UserEntity> Register(UserEntity user);
}
