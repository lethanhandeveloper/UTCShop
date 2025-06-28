using BuildingBlocks.CQRS;
using Identity.Application.Dtos;
using Identity.Application.Interfaces.Queries;

namespace Identity.Application.Modules.Admin.Queries;
public class GetAdminInfoQueryHandler(IUserQuery userQuery, IAccountQuery accountQuery) : IQueryHandler<GetAdminInfoByIdQuery, UserDto>
{
    public async Task<UserDto> Handle(GetAdminInfoByIdQuery request, CancellationToken cancellationToken)
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
