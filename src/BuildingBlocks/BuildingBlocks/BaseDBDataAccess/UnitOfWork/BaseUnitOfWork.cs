using Microsoft.EntityFrameworkCore;

namespace BuildingBlocks.BaseDBDataAccess.UnitOfWork;
public class BaseUnitOfWork<T> : IBaseUnitOfWork where T : DbContext
{
    protected readonly T _dbContext;

    public BaseUnitOfWork(T dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<int> SaveChangeAsync(CancellationToken cancellationToken)
    {
        return await _dbContext.SaveChangesAsync(cancellationToken);
    }
}
