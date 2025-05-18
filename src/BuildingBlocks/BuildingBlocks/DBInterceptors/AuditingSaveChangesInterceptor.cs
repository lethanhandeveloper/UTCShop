using BuildingBlocks.DomainAbtractions;
using BuildingBlocks.Services.CurrentUser;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.DependencyInjection;

namespace BuildingBlock.DBInterceptors;
public class AuditingSaveChangesInterceptor : SaveChangesInterceptor
{
    public override async ValueTask<InterceptionResult<int>> SavingChangesAsync(DbContextEventData eventData, InterceptionResult<int> result, CancellationToken cancellationToken = default)
    {
        var dbContext = eventData.Context;
        var httpContextAccessor = dbContext.GetService<IHttpContextAccessor>();
        var currentUserService = httpContextAccessor?.HttpContext?.RequestServices.GetService<ICurrentUserService>();

        foreach (var entry in dbContext.ChangeTracker.Entries().Where(
            e => e.State == EntityState.Added
            || e.State == EntityState.Modified))
        {
            if (entry.Entity is IAuditableEntity auditable)
            {
                if (entry.State == EntityState.Added)
                {
                    auditable.CreatedAt = DateTime.UtcNow;
                    auditable.CreatedBy = currentUserService.UserId;
                    auditable.LastUpdatedAt = DateTime.UtcNow;
                    auditable.LastUpdatedBy = currentUserService.UserId;
                    auditable.IsDeleted = false;
                }
                else if (entry.State == EntityState.Modified)
                {
                    auditable.LastUpdatedAt = DateTime.UtcNow;
                    auditable.LastUpdatedBy = currentUserService.UserId;
                }
            }
        }

        return await base.SavingChangesAsync(eventData, result, cancellationToken);
    }
}
