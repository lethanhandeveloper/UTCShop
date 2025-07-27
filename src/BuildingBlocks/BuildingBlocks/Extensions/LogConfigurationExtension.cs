using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Serilog;
using Serilog.Debugging;
using Serilog.Sinks.Elasticsearch;

namespace BuildingBlocks.Extensions;

public static class LogConfigurationExtension
{
    public static void ConfigureSerilog(this WebApplicationBuilder builder, string prefixIndexFormat)
    {
        SelfLog.Enable(Console.Error);
        var a = builder.Configuration.GetValue<string>("ElasticSearchForLogging:Uri");
        var b = builder.Configuration.GetValue<string>("ElasticSearchForLogging:User");
        var c = builder.Configuration.GetValue<string>("ElasticSearchForLogging:Password");
        Log.Logger = new LoggerConfiguration()
            .MinimumLevel.Debug()
            .WriteTo.File("logs/log-.txt", rollingInterval: RollingInterval.Day)
            .WriteTo.Elasticsearch(new ElasticsearchSinkOptions(new Uri(builder.Configuration.GetValue<string>("ElasticSearchForLogging:Uri")))
            {
                AutoRegisterTemplate = true,
                IndexFormat = $"identitysvc-{DateTime.UtcNow:yyyy.MM.dd}",
                ModifyConnectionSettings = x => x.BasicAuthentication(builder.Configuration.GetValue<string>("ElasticSearchForLogging:User"), builder.Configuration.GetValue<string>("ElasticSearchForLogging:Password")),
            })
            .Enrich.FromLogContext()
            .WriteTo.Console()
            .CreateLogger();

        builder.Host.UseSerilog();
    }
}
