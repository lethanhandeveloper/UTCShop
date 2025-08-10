namespace BuildingBlocks.BaseDBDataAccess.UnitOfWork;
public interface IBaseUnitOfWork
{
    public Task<int> SaveChangeAsync(CancellationToken cancellationToken);
    public Task BeginTransactionAsync(CancellationToken cancellationToken);
    public Task CommitTransactionAsync(CancellationToken cancellationToken);
    public Task RollbackTransactionAsync(CancellationToken cancellationToken);
}
