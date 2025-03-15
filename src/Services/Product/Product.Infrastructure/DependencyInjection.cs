using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Product.Application.Interfaces;
using Product.Domain.Data;
using Product.Infrastructure.Queries;
using Product.Infrastructure.Repositories;
using Product.Interfaces.Queries;
using Product.Interfaces.Repositories;

namespace Product.Infrastructure;
public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionstring = configuration.GetConnectionString("Database");

        services.AddDbContext<ProductDBContext>((sp, options) =>
        {
            options.UseNpgsql(connectionstring);
        });

        #region dbContext
        services.AddScoped<IProductDbContext, ProductDBContext>();
        #endregion
        #region queries
        services.AddScoped<IProductQuery, ProductQuery>();
        #endregion
        #region repositories
        services.AddScoped<IProductRepository, ProductRepository>();
        #endregion  
        #region unitOfWork
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        #endregion

        return services;
    }
}
