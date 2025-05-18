using Identity.Application.Interfaces;
using Identity.Domain.Data;
using Identity.Domain.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Identity.Infrastructure.Services;
public class AuthService : IAuthService
{
    private readonly IIdentityDbContext _dbContext;
    private readonly IConfiguration _configuration;

    public AuthService(IIdentityDbContext dbContext, IConfiguration configuration)
    {
        _dbContext = dbContext;
        _configuration = configuration;
    }

    public async Task<UserEntity> GenerateAccessToken(UserEntity user, List<RoleEntity> roles)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_configuration["JWT:SecretKey"]);

        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Name, user.Name)
        };

        claims.AddRange(roles.Select(r => new Claim(ClaimTypes.Role, r.Type.ToString())));

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            IssuedAt = DateTime.UtcNow,
            Issuer = _configuration["JWT:Issuer"],
            Audience = _configuration["JWT:Audience"],
            Expires = DateTime.UtcNow.AddMinutes(1),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
        };

        var accessToken = tokenHandler.CreateToken(tokenDescriptor);
        //user.JwtToken = tokenHandler.WriteToken(token);
        //user.Token = tokenHandler.WriteToken(token);
        //user.IsActive = true;

        user.AccessToken = tokenHandler.WriteToken(accessToken);
        user.RefreshToken = GenerateRefreshToken();

        return user;
    }

    public string GenerateRefreshToken()
    {
        var plainToken = Convert.ToBase64String(RandomNumberGenerator.GetBytes(64));
        return ComputeSha256Hash(plainToken);
    }


    private string ComputeSha256Hash(string rawData)
    {
        using var sha256 = SHA256.Create();
        var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(rawData));
        return Convert.ToBase64String(bytes);
    }

    public Task<UserEntity> Register(UserEntity user)
    {
        throw new NotImplementedException();
    }
}
