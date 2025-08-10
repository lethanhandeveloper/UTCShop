using Configuration.Domain.Data;

namespace Configuration.Application.Interfaces.Repositories;
public interface IUnitOfWork
{
    IConfigurationDbContext _configurationDbContext { get; }
    IProvinceRepository _provinceRepository { get; }
    IDistrictRepository _districtRepository { get; }
    IWardRepository _wardRepository { get; }

    Task<int> SaveChangeAsync(CancellationToken cancellationToken);
    Task BeginTransactionAsync(CancellationToken cancellationToken);
    Task CommitTransactionAsync(CancellationToken cancellationToken);
    Task RollbackTransactionAsync(CancellationToken cancellationToken);
}