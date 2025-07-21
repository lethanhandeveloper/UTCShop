using BuildingBlocks.Messaging.MassTransit;
using BuildingBlocks.Services;
using BuildingBlocks.Utils;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using Refit;
using System.Reflection;
using System.Text.RegularExpressions;
using Util.API.DBContext;
using Util.API.ExternalAPIs;
using Util.API.Services;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
string currentPath = Directory.GetCurrentDirectory();
string basePath = Regex.Match(currentPath, @".*?src").Value;


builder.Configuration.SetAppSettingLocation(SystemPathBuilder.GetBasePath(), builder.Environment);
builder.Services.AddTransient<IFileService, FileService>();

builder.Services.AddMessageBroker(builder.Configuration, Assembly.GetExecutingAssembly());


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<UtilDBContext>((sp, options) =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("Database"));
});

builder.Services.AddScoped<ILocationService, LocationService>();

builder.Services.AddRefitClient<ILocationApi>()
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

var app = builder.Build();

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

app.UseAuthorization();

app.MapControllers();

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "FileStorage")
    ),
    RequestPath = "/files"
});

//using (var scope = app.Services.CreateScope())
//{
//    var dbContext = scope.ServiceProvider.GetRequiredService<UtilDBContext>();
//    await dbContext.Database.MigrateAsync();
//}

app.Run();
