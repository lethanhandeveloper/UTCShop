using BuildingBlocks.BaseDBDataAccess.Interceptors;
using BuildingBlocks.Messaging.MassTransit;
using BuildingBlocks.Services;
using Product.Application;
using Product.Grpc.Services;
using Product.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.SetAppSettingLocation(AppContext.BaseDirectory, builder.Environment);
builder.AddServiceDefaults();

// Add services to the container.
builder.Services.AddGrpc();
builder.Services.AddScoped<AuditingSaveChangesInterceptor>();
builder.Services.AddApplicationServices(builder.Configuration).AddInfrastructureServices(builder.Configuration);
builder.Services.AddMessageBroker(builder.Configuration);

var app = builder.Build();


app.MapDefaultEndpoints();

// Configure the HTTP request pipeline.
app.MapGrpcService<GetProductInfoService>();
app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();
