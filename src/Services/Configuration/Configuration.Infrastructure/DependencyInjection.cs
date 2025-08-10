using Configuration.API.DBContext;
using Configuration.Application.Interfaces.ExternalService;
using Configuration.Application.Interfaces.Queries;
using Configuration.Application.Interfaces.Repositories;
using Configuration.Domain.Data;
using Configuration.Infrastructure.Queries;
using Configuration.Infrastructure.Repositories;
using Configuration.Infrastructure.Services.ExternalServices.Location;
using Configuration.Infrastructure.Services.ExternalServices.Location.Refit.APIInterfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Npgsql;
using Refit;

namespace Configuration.Infrastructure;
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

        services.AddDbContext<ConfigurationDBContext>((sp, options) =>
        {
            var dataSource = sp.GetRequiredService<NpgsqlDataSource>();
            options.UseNpgsql(dataSource);
        });

        #region dbContext
        services.AddScoped<IConfigurationDbContext, ConfigurationDBContext>();
        #endregion
        #region queries
        services.AddScoped<IProvinceQuery, ProvinceQuery>();
        services.AddScoped<IDistrictQuery, DistrictQuery>();
        services.AddScoped<IWardQuery, WardQuery>();
        #endregion
        #region repositories
        services.AddScoped<IProvinceRepository, ProvinceRepository>();
        services.AddScoped<IDistrictRepository, DistrictRepository>();
        services.AddScoped<IWardRepository, WardRepository>();
        #endregion
        #region unitOfWork
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        #endregion

        #region other services
        services.AddScoped<ILocationService, LocationService>();
        services.AddRefitClient<ILocationApi>()
        .ConfigureHttpClient(c =>
        {
            c.BaseAddress = new Uri("https://provinces.open-api.vn/api");
        }).ConfigurePrimaryHttpMessageHandler(() =>
        {
            return new HttpClientHandler
            {
                ServerCertificateCustomValidationCallback = (message, cert, chain, errors) => true
            };
        });
        #endregion

        return services;
    }
}
