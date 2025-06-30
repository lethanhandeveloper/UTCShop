using BuildingBlocks.CQRS;
using Identity.Application.Dtos;

namespace Identity.Application.Modules.User.Queries;
public record GetUserInfoByAccountIdQuery(Guid Id) : IQuery<UserDto>
{
}
