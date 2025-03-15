namespace BuildingBlocks.DBQueryAbtractions;
public interface IBaseQuery<T>
{
    Task<T> GetByIdAsync();
    Task<IEnumerable<T>> GetPagedAsync(int pageNumber = 1, int pageSize = 10);
    Task<long> CountAsync();
}
