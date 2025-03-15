using Product.API.Extensions;
using Product.Application;

var builder = WebApplication.CreateBuilder(args);

var assembly = typeof(Program).Assembly;


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();  // Thêm Swagger


// Add services to the container.
builder.Services.AddApplicationServices(builder.Configuration).AddInfrastructureServices(builder.Configuration);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())  // Đảm bảo chỉ chạy Swagger ở môi trường Development
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.InitialiseDatabaseAsync();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
