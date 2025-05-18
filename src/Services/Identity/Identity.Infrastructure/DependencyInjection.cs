using Identity.Application.Interfaces;
using Identity.Application.Interfaces.Queries;
using Identity.Application.Interfaces.Repositories;
using Identity.Domain.Data;
using Identity.Infrastructure.Queries;
using Identity.Infrastructure.Repositories;
using Identity.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Npgsql;

namespace Identity.Infrastructure;
public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionstring = configuration.GetConnectionString("Database");

        services.AddSingleton(provider =>
        {
            var builder = new NpgsqlDataSourceBuilder(connectionstring);
            builder.EnableDynamicJson();
            return builder.Build();
        });

        services.AddDbContext<IdentityDbContext>((sp, options) =>
        {
            var dataSource = sp.GetRequiredService<NpgsqlDataSource>();
            options.UseNpgsql(dataSource);
        });

        #region dbContext
        services.AddScoped<IIdentityDbContext, IdentityDbContext>();
        #endregion
        #region queries

        #endregion
        services.AddScoped<IUserQuery, UserQuery>();
        services.AddScoped<IRoleQuery, RoleQuery>();
        services.AddScoped<IRefreshTokenQuery, RefreshTokenQuery>();
        #region repositories

        #endregion
        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IRoleRepository, RoleRepository>();
        services.AddScoped<IRefreshTokenRepository, RefreshTokenRepository>();
        #region unitOfWork
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        #endregion
        #region services
        services.AddScoped<IAuthService, AuthService>();
        #endregion

        return services;
    }
}
