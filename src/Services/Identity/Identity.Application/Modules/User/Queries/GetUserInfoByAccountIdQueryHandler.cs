using BuildingBlocks.CQRS;
using Identity.Application.Dtos;
using Identity.Application.Interfaces.Queries;

namespace Identity.Application.Modules.User.Queries;
public class GetUserInfoByAccountIdQueryHandler(IUserQuery userQuery, IAccountQuery accountQuery) : IQueryHandler<GetUserInfoByAccountIdQuery, UserDto>
{
    public async Task<UserDto> Handle(GetUserInfoByAccountIdQuery request, CancellationToken cancellationToken)
    {
        var account = await accountQuery.GetByIdAsync(request.Id);
        var user = await userQuery.GetByIdAsync(account.UserId);
        return new UserDto
        {
            Name = user.Name,
            Email = user.Email,
            Age = user.Age,
            Addresses = user.Addresses,
        };
    }
}
