using BuildingBlocks.Pagination;

namespace BuildingBlocks.DBQueryAbtractions;
public interface IBaseQuery<T>
{
    Task<T> GetByIdAsync(Guid Id);
    Task<IEnumerable<T>> GetPagedAsync(List<FilterCreteria> filters, int pageNumber = 1, int pageSize = 10);
    Task<long> CountAsync();
}
