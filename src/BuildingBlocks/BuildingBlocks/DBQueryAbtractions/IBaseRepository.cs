namespace BuildingBlocks.DBQueryAbtractions;
public interface IBaseRepository<T>
{
    Task CreateAsync(T entity, CancellationToken cancellation);
    Task UpdateAsync(T entity, CancellationToken cancellation);
    Task DeleteAsync(List<Guid> Ids, CancellationToken cancellation);
}
