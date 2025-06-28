using BuildingBlocks.Enums;
using Identity.Domain.Entities;

namespace Identity.Application.Interfaces;
public interface IAuthService
{
    public string GenerateAccessToken(AccountEntity account, List<RoleType> roles);
    public string GenerateRefreshToken();
    public Task<UserEntity> Register(UserEntity user);
}
