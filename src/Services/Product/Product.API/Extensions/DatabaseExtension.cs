using Microsoft.EntityFrameworkCore;

namespace Product.API.Extensions;

public static class DatabaseExtension
{
    public static async Task InitialiseDatabaseAsync(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<ProductDBContext>();

        context.Database.MigrateAsync().GetAwaiter().GetResult();
    }
}
