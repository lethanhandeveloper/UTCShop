using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using User.Domain.Data;

namespace User.Infrastructure;
public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionstring = configuration.GetConnectionString("Database");

        services.AddDbContext<UserDbContext>((sp, options) =>
        {
            options.UseNpgsql(connectionstring);
        });

        #region dbContext
        services.AddScoped<IUserDbContext, UserDbContext>();
        #endregion
        #region queries

        #endregion
        #region repositories

        #endregion
        #region unitOfWork

        #endregion

        return services;
    }
}
