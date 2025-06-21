using BuildingBlocks.Enums;

namespace BuildingBlocks.Pagination;
public record PaginationRequest(List<FilterCreteria> filters, List<SortCreteria> sortings, int pageIndex = 0, int pageSize = 10);

public record FilterCreteria(string field, ComparisionOperator comparisonOperator, string value);
public record SortCreteria(string field, SortingEnum direction);
