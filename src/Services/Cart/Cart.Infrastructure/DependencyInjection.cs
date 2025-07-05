using Cart.Application.Interfaces;
using Cart.Application.Interfaces.Queries;
using Cart.Application.Interfaces.Repositories;
using Cart.Domain.Data;
using Cart.Infrastructure.Queries;
using Cart.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Npgsql;

namespace Cart.Infrastructure;
public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionstring = configuration.GetConnectionString("Database");
        var redisConStr = configuration.GetConnectionString("Redis");

        services.AddSingleton(provider =>
        {
            var builder = new NpgsqlDataSourceBuilder(connectionstring);
            builder.EnableDynamicJson();
            return builder.Build();
        });

        services.AddDbContext<CartDBContext>((sp, options) =>
        {
            var dataSource = sp.GetRequiredService<NpgsqlDataSource>();
            options.UseNpgsql(dataSource);
        });

        services.AddStackExchangeRedisCache(options =>
        {
            options.Configuration = redisConStr;
        });

        #region dbContext
        services.AddScoped<ICartDbContext, CartDBContext>();
        #endregion
        #region queries
        services.AddScoped<ICartQuery, CartQuery>();
        services.AddScoped<ICartItemQuery, CartItemQuery>();
        #endregion
        #region repositories
        services.AddScoped<ICartRepository, CartRepository>();
        services.AddScoped<ICartItemRepository, CartItemRepository>();
        #endregion
        #region unitOfWork
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        #endregion

        return services;
    }
}
