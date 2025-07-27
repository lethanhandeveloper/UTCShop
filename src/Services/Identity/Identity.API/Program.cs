using BuildingBlocks.Extensions;
using BuildingBlocks.Services;
using Identity.Application;
using Identity.Infrastructure;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.SetAppSettingLocation(AppContext.BaseDirectory, builder.Environment);

builder.AddServiceDefaults();
builder.ConfigureSerilog("identityservice");

builder.Services.AddDefaultServices(builder.Configuration);
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
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


//builder.Services.AddAuthentication(opt =>
//{
//    opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//    opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
//}).AddJwtBearer(opt =>
//{   // for development only
//    opt.RequireHttpsMetadata = false;
//    opt.SaveToken = true;
//    var config = builder.Configuration["JWT:SecretKey"];
//    opt.TokenValidationParameters = new TokenValidationParameters
//    {
//        ValidateIssuerSigningKey = true,
//        ValidateLifetime = true,
//        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(builder.Configuration["JWT:SecretKey"])),
//        ValidateIssuer = true,
//        ValidIssuer = builder.Configuration["JWT:Issuer"],
//        ValidateAudience = true,
//        ValidAudience = builder.Configuration["JWT:Audience"],
//        ClockSkew = TimeSpan.Zero
//    };

//    opt.Events = new JwtBearerEvents
//    {
//        OnMessageReceived = context =>
//        {
//            context.Token = context.Request.Cookies["accessToken"];
//            return Task.CompletedTask;
//        },
//        OnChallenge = context =>
//        {
//            context.HandleResponse();

//            context.Response.StatusCode = StatusCodes.Status401Unauthorized;
//            context.Response.ContentType = "application/json";

//            var response = new ApiResponse<object>
//            {
//                Success = false,
//                Message = "Unauthorized access. Please check your authentication token.",
//                StatusCode = HttpStatusCodeEnum.Unauthorized
//            };

//            return context.Response.WriteAsJsonAsync(response);
//        }
//    };
//});

builder.Services.AddInfrastructureServices(builder.Configuration).AddApplicationServices(builder.Configuration);

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

//using (var scope = app.Services.CreateScope())
//{
//    var dbContext = scope.ServiceProvider.GetRequiredService<IdentityDbContext>();
//    await dbContext.Database.MigrateAsync();
//}

app.Run();
