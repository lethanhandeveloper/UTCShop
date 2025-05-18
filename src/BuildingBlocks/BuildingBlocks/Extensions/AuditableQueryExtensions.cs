using BuildingBlocks.DomainAbtractions;
using Microsoft.EntityFrameworkCore;

namespace BuildingBlocks.Extensions;
public static class AuditableQueryExtensions
{
    public static IQueryable<TEntity> IncludeAuditUsers<TEntity>(this IQueryable<TEntity> query)
        where TEntity : class, IAuditableEntity
    {
        return query
            .Include(e => e.CreatedAt)
            .Include(e => e.CreatedBy)
            .Include(e => e.LastUpdatedAt)
            .Include(e => e.LastUpdatedBy);
    }
}
