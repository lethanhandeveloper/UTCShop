namespace BuildingBlocks.DBQueryAbtractions;
public interface IBaseQuery<T>
{
    Task<T> AddAsync(T entity, CancellationToken cancellation);
    Task<T> GetByIdAsync(Guid Id);
    Task<IEnumerable<T>> GetPagedAsync(int pageNumber = 1, int pageSize = 10);
    Task<long> CountAsync();
}
