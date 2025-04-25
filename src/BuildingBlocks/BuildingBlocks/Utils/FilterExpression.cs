using BuildingBlocks.Enums;
using BuildingBlocks.Pagination;
using System.Linq.Expressions;

namespace BuildingBlocks.Utils;
public static class ExpressionBuilder
{
    public static Expression<Func<T, bool>> BuildPredicate<T>(FilterCreteria filter)
    {
        var parameter = Expression.Parameter(typeof(T), "x");
        var property = Expression.Property(parameter, filter.field);

        var targetType = Nullable.GetUnderlyingType(property.Type) ?? property.Type;
        var convertedValue = Convert.ChangeType(filter.value, targetType);
        var constant = Expression.Constant(convertedValue, property.Type);

        Expression comparison = filter.comparisonOperator switch
        {
            ComparisionOperator.Equals => Expression.Equal(property, constant),
            ComparisionOperator.NotEquals => Expression.NotEqual(property, constant),
            _ => throw new NotSupportedException($"Operator {filter.comparisonOperator} is not supported")
        };

        return Expression.Lambda<Func<T, bool>>(comparison, parameter);
    }
}
