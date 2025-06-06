﻿using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Identity.Application
{
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

            return services;
        }
    }
}
