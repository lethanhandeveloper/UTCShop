namespace BuildingBlocks.DBQueryAbtractions;
public interface IBaseRepository<T>
{
    Task<Guid> CreateAsync(T entity, CancellationToken cancellation);
    Task<Guid> UpdateAsync(T entity, CancellationToken cancellation);
    Task<Guid> DeleteAsync(Guid Id, CancellationToken cancellation);
}
