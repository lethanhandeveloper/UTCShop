//using BuildingBlocks.DomainAbtractions;
//using BuildingBlocks.Services.CurrentUser;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.EntityFrameworkCore.Diagnostics;

//namespace BuildingBlocks.Services.DBInterceptors;
//public class AuditableEntitySaveChangesInterceptor : SaveChangesInterceptor
//{
//    private readonly ICurrentUserService _currentUserService;

//    public AuditableEntitySaveChangesInterceptor(ICurrentUserService currentUserService)
//    {
//        _currentUserService = currentUserService;
//    }

//    public override InterceptionResult<int> SavingChanges(
//        DbContextEventData eventData,
//        InterceptionResult<int> result)
//    {
//        UpdateAuditFields(eventData.Context);
//        return base.SavingChanges(eventData, result);
//    }

//    public override ValueTask<InterceptionResult<int>> SavingChangesAsync(
//        DbContextEventData eventData,
//        InterceptionResult<int> result,
//        CancellationToken cancellationToken = default)
//    {
//        UpdateAuditFields(eventData.Context);
//        return base.SavingChangesAsync(eventData, result, cancellationToken);
//    }

//    private void UpdateAuditFields(DbContext? context)
//    {
//        if (context == null) return;

//        var now = DateTime.UtcNow;
//        var userId = _currentUserService.UserId;

//        foreach (var entry in context.ChangeTracker.Entries<IAuditableEntity>())
//        {
//            if (entry.State == EntityState.Added)
//            {
//                entry.Entity.CreatedAt = now;
//                entry.Entity.CreatedBy = userId;
//            }

//            if (entry.State == EntityState.Modified)
//            {
//                entry.Entity.LastModifiedAt = now;
//                entry.Entity.LastModifiedBy = userId;
//            }
//        }
//    }
//}
