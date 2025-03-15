using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using User.Application.Dtos;
using User.Application.Interfaces;
using User.Domain;
using User.Domain.Data;

namespace User.Infrastructure.Services;
public class AuthService : IAuthService
{
    private readonly IUserDbContext _dbContext;
    private readonly IConfiguration _configuration;

    public AuthService(IUserDbContext dbContext, IConfiguration configuration)
    {
        _dbContext = dbContext;
        _configuration = configuration;
    }

    public async Task<UserDto> Login(string email, string password)
    {
        UserEntity? user = await _dbContext.Users.FindAsync(email);

        if (user == null || BCrypt.Net.BCrypt.Verify(password, user.Password) == false)
        {
            return null;
        }

        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_configuration["JWT:SecretKey"]);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                    new Claim(ClaimTypes.Name, user.Name),
                    new Claim(ClaimTypes.GivenName, user.Name),
                    //new Claim(ClaimTypes.Role, user.)
            }),
            IssuedAt = DateTime.UtcNow,
            Issuer = _configuration["JWT:Issuer"],
            Audience = _configuration["JWT:Audience"],
            Expires = DateTime.UtcNow.AddMinutes(30),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        user.Token = tokenHandler.WriteToken(token);
        user.IsActive = true;

        return user;
    }

    public Task<UserDto> Register(UserDto user)
    {
        throw new NotImplementedException();
    }
}
