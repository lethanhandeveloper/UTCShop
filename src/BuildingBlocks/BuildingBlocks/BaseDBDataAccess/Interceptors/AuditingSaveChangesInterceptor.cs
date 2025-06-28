using BuildingBlocks.DomainAbtractions;
using BuildingBlocks.Services.CurrentUser;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.DependencyInjection;

namespace BuildingBlocks.BaseDBDataAccess.Interceptors;
public class AuditingSaveChangesInterceptor : SaveChangesInterceptor
{
    public override async ValueTask<InterceptionResult<int>> SavingChangesAsync(DbContextEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)
    {
        var dbContext = eventData.Context;
        var httpContextAccessor = dbContext.GetService<IHttpContextAccessor>();
        var currentAccountService = httpContextAccessor?.HttpContext?.RequestServices.GetService<ICurrentAccountService>();

        foreach (var entry in dbContext.ChangeTracker.Entries().Where(
            e => e.State == EntityState.Added
            || e.State == EntityState.Modified))
        {
            if (entry.Entity is IAuditableEntity auditable)
            {
                if (entry.State == EntityState.Added)
                {
                    auditable.CreatedAt = DateTime.UtcNow;
                    auditable.CreatedBy = currentAccountService.AccountId;
                    auditable.LastUpdatedAt = DateTime.UtcNow;
                    auditable.LastUpdatedBy = currentAccountService.AccountId;
                    auditable.IsDeleted = false;
                }
                else if (entry.State == EntityState.Modified)
                {
                    auditable.LastUpdatedAt = DateTime.UtcNow;
                    auditable.LastUpdatedBy = currentAccountService.AccountId;
                }
            }
        }

        return await base.SavingChangesAsync(eventData, result, cancellationToken);
    }
}
