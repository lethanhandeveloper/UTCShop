using BuildingBlocks.CQRS;
using Identity.Application.Dtos;
using Identity.Application.Interfaces.Queries;

namespace Identity.Application.Modules.Admin.Queries;
public class GetAdminInfoQueryHandler(IUserQuery userQuery) : IQueryHandler<GetAdminInfoByIdQuery, UserDto>
{
    public async Task<UserDto> Handle(GetAdminInfoByIdQuery request, CancellationToken cancellationToken)
    {
        var user = await userQuery.GetByIdAsync(request.Id);
        return new UserDto
        {
            Name = user.Name,
            Email = user.Email,
            Age = user.Age,
            Addresses = user.Addresses,
        };
    }
}
