using BuildingBlocks.BaseDBDataAccess.Interceptors;
using BuildingBlocks.Dtos;
using BuildingBlocks.Enums;
using BuildingBlocks.Services.CurrentUser;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace BuildingBlocks.Services;
public static class Extensions
{
    public static IServiceCollection AddDefaultServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddHttpContextAccessor();
        services.AddScoped<ICurrentAccountService, CurrentAccountService>();

        services.AddAuthentication(opt =>
        {
            opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(opt =>
        {   // for development only
            opt.RequireHttpsMetadata = false;
            opt.SaveToken = true;
            var config = configuration["JWT:SecretKey"];
            opt.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                ValidateLifetime = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(configuration["JWT:SecretKey"])),
                ValidateIssuer = true,
                ValidIssuer = configuration["JWT:Issuer"],
                ValidateAudience = true,
                ValidAudience = configuration["JWT:Audience"],
                ClockSkew = TimeSpan.Zero
            };

            opt.Events = new JwtBearerEvents
            {
                OnMessageReceived = context =>
                {
                    context.Token = context.Request.Cookies["accessToken"];
                    return Task.CompletedTask;
                },
                OnChallenge = context =>
                {
                    context.HandleResponse();

                    context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                    context.Response.ContentType = "application/json";

                    var response = new ApiResponse<object>
                    {
                        Success = false,
                        Message = "Unauthorized access. Please check your authentication token.",
                        StatusCode = HttpStatusCodeEnum.Unauthorized
                    };

                    return context.Response.WriteAsJsonAsync(response);
                }
            };
        });

        services.AddScoped<AuditingSaveChangesInterceptor>();

        return services;
    }
}
