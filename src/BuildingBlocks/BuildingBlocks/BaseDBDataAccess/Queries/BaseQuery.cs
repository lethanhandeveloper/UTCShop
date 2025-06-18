using BuildingBlocks.DBQuery;
using BuildingBlocks.Pagination;
using BuildingBlocks.Utils;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace BuildingBlocks.BaseDBDataAccess.Queries;
public class BaseQuery<T> : IBaseQuery<T> where T : class
{
    protected readonly DbContext _dbContext;
    protected readonly DbSet<T> _dbSet;

    public BaseQuery(DbContext dbContext)
    {
        _dbContext = dbContext;
        _dbSet = _dbContext.Set<T>();
    }

    public async Task<long> CountAsync()
    {
        return await _dbSet.LongCountAsync();
    }

    public async Task<T> GetByIdAsync(Guid Id)
    {
        var property = typeof(T).GetProperty("Id");
        var parameter = Expression.Parameter(typeof(T), "x");
        var propertyAccess = Expression.Property(parameter, property);
        var idConstant = Expression.Constant(Id);
        var equalExpr = Expression.Equal(propertyAccess, idConstant);
        var lambda = Expression.Lambda<Func<T, bool>>(equalExpr, parameter);

        return await _dbSet.Where(lambda).FirstOrDefaultAsync();
    }

    public async Task<(IEnumerable<T> data, long totalCount)> GetPagedAsync(List<FilterCreteria> filters, int pageNumber = 1, int pageSize = 10)
    {
        var query = _dbSet.AsQueryable();
        var isDeletedProp = typeof(T).GetProperty("IsDeleted");

        if (isDeletedProp != null && isDeletedProp.PropertyType == typeof(bool?))
        {
            var parameter = Expression.Parameter(typeof(T), "x");
            var property = Expression.Property(parameter, "IsDeleted");
            var falseConstant = Expression.Constant(false, typeof(bool?));
            var equalExpr = Expression.Equal(property, falseConstant);
            var lambda = Expression.Lambda<Func<T, bool>>(equalExpr, parameter);
            query = query.Where(lambda);
        }

        var entityType = _dbContext.Model.FindEntityType(typeof(T));
        if (entityType != null)
        {
            var navigations = entityType.GetNavigations();
            foreach (var navigation in navigations)
            {
                query = query.Include(navigation.Name);
            }
        }

        foreach (var filter in filters)
        {
            var expression = ExpressionBuilder.BuildPredicate<T>(filter);
            query = query.Where(expression);
        }

        var totalCount = await query.LongCountAsync();
        query = query.Skip((pageNumber - 1) * pageSize).Take(pageSize);


        return (await query.ToListAsync(), totalCount);
    }
}
