using BuildingBlocks.Enums;
using System.Linq.Expressions;
using System.Reflection;

namespace BuildingBlocks.Utils;
public static class ExpressionBuilder
{
    public static Expression<Func<T, bool>> BuildPredicate<T>(string propertyParam, object? constantParam, ComparisionOperator operatorParam)
    {
        var parameter = Expression.Parameter(typeof(T), "x");
        var property = Expression.Property(parameter, propertyParam);

        var propertyType = property.Type;
        var targetType = Nullable.GetUnderlyingType(propertyType) ?? propertyType;

        object? convertedConstant = constantParam == null
        ? null
        : Convert.ChangeType(constantParam, targetType);

        var constant = Expression.Constant(convertedConstant, propertyType);

        Expression comparison = operatorParam switch
        {
            ComparisionOperator.Equals => Expression.Equal(property, constant),
            ComparisionOperator.NotEquals => Expression.NotEqual(property, constant),
            _ => throw new NotSupportedException($"Operator {operatorParam} is not supported")
        };

        return Expression.Lambda<Func<T, bool>>(comparison, parameter);
    }


    public static Expression<Func<T, object>> GetOrderExpression<T>(string propertyName)
    {
        var parameter = Expression.Parameter(typeof(T), "x");

        var property = typeof(T).GetProperty(propertyName,
            BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase);

        if (property == null)
            throw new ArgumentException($"Property '{propertyName}' not found on type '{typeof(T).Name}'");
        var propertyAccess = Expression.Property(parameter, property);

        Expression converted = Expression.Convert(propertyAccess, typeof(object));

        return Expression.Lambda<Func<T, object>>(converted, parameter);
    }
}
