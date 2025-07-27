using BuildingBlocks.Extensions;
using BuildingBlocks.Messaging.MassTransit;
using BuildingBlocks.Services;
using Cart.Application.Modules.Cart.EventHandlers.Integration;
using Cart.Infrastructure;
using Microsoft.OpenApi.Models;
using Product.Application;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.SetAppSettingLocation(AppContext.BaseDirectory, builder.Environment);

builder.ConfigureSerilog("cartservice");

builder.AddServiceDefaults();
builder.Services.AddDefaultServices(builder.Configuration);
// Add services to the container.
builder.Services.AddGrpcClient<Product.Grpc.Product.ProductClient>(options =>
{
    options.Address = new Uri(builder.Configuration["GrpcSettings:ProductUrl"]!);
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

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "",
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

builder.Services.AddInfrastructureServices(builder.Configuration).AddApplicationServices(builder.Configuration);

builder.Services.AddMessageBroker(configuration: builder.Configuration, typeof(ProductUpdatedEventHandler).Assembly);


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

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
//app.MapGrpcService<ProductProtoService>();

//using (var scope = app.Services.CreateScope())
//{
//    var dbContext = scope.ServiceProvider.GetRequiredService<CartDBContext>();
//    await dbContext.Database.MigrateAsync();
//}

app.Run();
