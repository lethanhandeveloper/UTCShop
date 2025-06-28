
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace BuildingBlocks.BaseDBDataAccess.Repositories;
public class BaseRepository<T> : IBaseRepository<T> where T : class
{
    protected readonly DbContext _dbContext;
    protected readonly DbSet<T> _dbSet;

    public BaseRepository(DbContext dbContext)
    {
        _dbContext = dbContext;
        _dbSet = _dbContext.Set<T>();
    }

    public async Task CreateAsync(T entity, CancellationToken cancellationToken)
    {
        await _dbContext.AddAsync(entity);
    }

    public async Task DeleteAsync(List<Guid> Ids, CancellationToken cancellationToken)
    {
        var parameter = Expression.Parameter(typeof(T), "x");
        var prop = typeof(T).GetProperty("Id");
        if (prop == null) throw new System.Exception("T must have an Id property");

        var lambda = Expression.Lambda<Func<T, bool>>(
            Expression.Call(typeof(Enumerable), "Contains", new[] { typeof(Guid) },
                Expression.Constant(Ids),
                Expression.Property(parameter, "Id")),
            parameter
        );

        var items = await _dbSet.Where(lambda).ToListAsync(cancellationToken);

        foreach (var item in items)
        {
            var isDeletedProp = typeof(T).GetProperty("IsDeleted");
            if (isDeletedProp != null && isDeletedProp.PropertyType == typeof(bool))
            {
                isDeletedProp.SetValue(item, true);
            }
        }
    }

    public Task UpdateAsync(T entity, CancellationToken cancellation)
    {
        _dbContext.Update(entity);
        return Task.CompletedTask;
    }
}
