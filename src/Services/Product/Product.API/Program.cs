using BuildingBlocks.Messaging.MassTransit;
using BuildingBlocks.Services;
using BuildingBlocks.Utils;
using Mapster;
using Microsoft.OpenApi.Models;
using Product.API.Extensions;
using Product.Application;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.File("logs/log-.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();


builder.Configuration
    .SetBasePath(SystemPathBuilder.GetBasePath())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddEnvironmentVariables();

builder.Services.AddMessageBroker(builder.Configuration);

builder.AddServiceDefaults();

builder.Host.UseSerilog();

var assembly = typeof(Program).Assembly;

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "JWT Auth Sample",
        Version = "v1"
    });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer jhfdkj.jkdsakjdsa.jkdsajk\"",
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement {
        {
            new OpenApiSecurityScheme {
                Reference = new OpenApiReference {
                    Type = ReferenceType.SecurityScheme,
                        Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
});

// Add services to the container.
builder.Services.AddApplicationServices(builder.Configuration).AddInfrastructureServices(builder.Configuration);

builder.Services.AddDefaultServices(builder.Configuration);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy
            .WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var app = builder.Build();

app.MapDefaultEndpoints();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(c =>
    {
        c.OpenApiVersion = Microsoft.OpenApi.OpenApiSpecVersion.OpenApi2_0;
    });
    app.UseSwaggerUI();
}


ProductMappingConfigExtension.RegisterMappings(TypeAdapterConfig.GlobalSettings);

app.InitialiseDatabaseAsync();
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.UseCors("AllowFrontend");

app.Run();
