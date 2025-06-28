namespace BuildingBlocks.BaseDBDataAccess.UnitOfWork;
public interface IBaseUnitOfWork
{
    public Task<int> SaveChangeAsync(CancellationToken cancellationToken);
}
