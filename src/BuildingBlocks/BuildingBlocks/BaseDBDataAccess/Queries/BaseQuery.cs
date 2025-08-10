using BuildingBlocks.DBQuery;
using BuildingBlocks.Enums;
using BuildingBlocks.Pagination;
using BuildingBlocks.Utils;
using Microsoft.EntityFrameworkCore;
using System.Linq.Dynamic.Core;
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

    public async Task<IEnumerable<T>> GetAllAsync()
    {
        var query = _dbSet.AsQueryable();
        var expression = ExpressionBuilder.BuildPredicate<T>("IsDeleted", false, ComparisionOperator.Equals);
        return await query.Where(expression).ToListAsync();
    }

    public async Task<IEnumerable<T>> GetAllByIdAsync(Guid Id)
    {
        var query = _dbSet.AsQueryable();
        var expression = ExpressionBuilder.BuildPredicate<T>("Id", Id, ComparisionOperator.Equals);
        return await _dbSet.Where(expression).ToListAsync();
    }

    public async Task<T> GetByIdAsync(Guid Id)
    {
        var query = _dbSet.AsQueryable();
        var expression = ExpressionBuilder.BuildPredicate<T>("Id", Id, ComparisionOperator.Equals);
        //var property = typeof(T).GetProperty("Id");
        //var parameter = Expression.Parameter(typeof(T), "x");
        //var propertyAccess = Expression.Property(parameter, property);
        //var idConstant = Expression.Constant(Id);
        //var equalExpr = Expression.Equal(propertyAccess, idConstant);
        //var lambda = Expression.Lambda<Func<T, bool>>(equalExpr, parameter);

        return await _dbSet.Where(expression).FirstOrDefaultAsync();
    }

    public async Task<(IEnumerable<T> data, long totalCount)> GetPagedAsync(List<FilterCreteria> filters, List<SortCreteria> sorts, int pageNumber = 1, int pageSize = 10)
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
            var expression = ExpressionBuilder.BuildPredicate<T>(filter.field, filter.value, ComparisionOperator.Equals);
            query = query.Where(expression);
        }

        foreach (var sort in sorts)
        {
            var sortExpression = string.Join(", ",
        sorts.Select(s => $"{s.field} {(s.direction == SortingEnum.Asc ? "ascending" : "descending")}"));

            query = query.OrderBy(sortExpression);
        }

        var totalCount = await query.LongCountAsync();
        query = query.Skip((pageNumber - 1) * pageSize).Take(pageSize);


        return (await query.ToListAsync(), totalCount);
    }
}
