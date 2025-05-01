namespace BuildingBlocks.DBQueryAbtractions;
public interface IBaseRepository<T>
{
    Task<Guid> CreateAsync(T entity, CancellationToken cancellation);
    Task<Guid> UpdateAsync(T entity, CancellationToken cancellation);
    Task<List<Guid>> DeleteAsync(List<Guid> Ids, CancellationToken cancellation);
}
