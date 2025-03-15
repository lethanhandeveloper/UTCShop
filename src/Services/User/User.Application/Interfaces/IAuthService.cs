using User.Application.Dtos;

namespace User.Application.Interfaces;
public interface IAuthService
{
    public Task<UserDto> Login(string email, string password);
    public Task<UserDto> Register(UserDto user);
}
