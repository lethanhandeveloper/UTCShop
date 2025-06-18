using BuildingBlocks.Pagination;

namespace BuildingBlocks.DBQuery;
public interface IBaseQuery<T>
{
    Task<T> GetByIdAsync(Guid Id);
    Task<(IEnumerable<T> data, long totalCount)> GetPagedAsync(List<FilterCreteria> filters, int pageNumber = 1, int pageSize = 10);
    Task<long> CountAsync();
}
