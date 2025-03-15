using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Npgsql;
using User.Application.Interfaces;
using User.Application.Interfaces.Queries;
using User.Application.Interfaces.Repositories;
using User.Domain.Data;
using User.Infrastructure.Queries;
using User.Infrastructure.Repositories;
using User.Infrastructure.Services;

namespace User.Infrastructure;
public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionstring = configuration.GetConnectionString("Database");

        services.AddDbContext<UserDbContext>((sp, options) =>
        {
            options.UseNpgsql(connectionstring);
            var dataSourceBuilder = new NpgsqlDataSourceBuilder(connectionstring);
            dataSourceBuilder.EnableDynamicJson();
            options.UseNpgsql(dataSourceBuilder.Build());
        });

        #region dbContext
        services.AddScoped<IUserDbContext, UserDbContext>();
        #endregion
        #region queries

        #endregion
        services.AddScoped<IUserQuery, UserQuery>();
        #region repositories

        #endregion
        services.AddScoped<IUserRepository, UserRepository>();
        #region unitOfWork

        #endregion
        #region services
        services.AddScoped<IAuthService, AuthService>();
        #endregion

        return services;
    }
}
