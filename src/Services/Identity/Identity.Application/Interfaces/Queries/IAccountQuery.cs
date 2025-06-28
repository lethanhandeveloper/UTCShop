using BuildingBlocks.DBQuery;
using Identity.Domain.Entities;

namespace Identity.Application.Interfaces.Queries;

public interface IAccountQuery : IBaseQuery<AccountEntity>
{
    Task<AccountEntity?> GetByUserNameOrEmailAsync(string username);
}
