using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
//using Product.Grpc;
using System.Reflection;

namespace Product.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddMediatR(cfg =>
        {
            cfg.RegisterServicesFromAssemblies(Assembly.GetExecutingAssembly());
            //cfg.AddOpenBehavior(typeof(ValidationBehavior<,>));
            //cfg.AddOpenBehavior(typeof(LoggingBehavior<,>));
        });

        services.AddGrpcClient<Product.Grpc.Product.ProductClient>("ProductGrpcClient", o =>
        {
            o.Address = new Uri("https://localhost:5003");
        })
        .ConfigurePrimaryHttpMessageHandler(() =>
        {
            var handler = new HttpClientHandler
            {
                ServerCertificateCustomValidationCallback =
                HttpClientHandler.DangerousAcceptAnyServerCertificateValidator
            };

            return handler;
        });

        return services;
    }
}
