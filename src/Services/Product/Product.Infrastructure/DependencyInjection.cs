using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Npgsql;
using Product.Application.Interfaces;
using Product.Application.Interfaces.Queries;
using Product.Application.Interfaces.Repositories;
using Product.Domain.Data;
using Product.Infrastructure.Queries;
using Product.Infrastructure.Repositories;

namespace Product.Infrastructure;
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

        services.AddDbContext<ProductDBContext>((sp, options) =>
        {
            var dataSource = sp.GetRequiredService<NpgsqlDataSource>();
            options.UseNpgsql(dataSource);
        });

        #region dbContext
        services.AddScoped<IProductDbContext, ProductDBContext>();
        #endregion
        #region queries
        services.AddScoped<IProductQuery, ProductQuery>();
        services.AddScoped<ICategoryQuery, CategoryQuery>();
        #endregion
        #region repositories
        services.AddScoped<IProductRepository, ProductRepository>();
        services.AddScoped<ICategoryRepository, CategoryRepository>();
        #endregion  
        #region unitOfWork
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        #endregion

        return services;
    }
}
