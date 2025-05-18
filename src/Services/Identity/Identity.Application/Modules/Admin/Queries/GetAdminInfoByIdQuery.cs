using BuildingBlocks.CQRS;
using Identity.Application.Dtos;

namespace Identity.Application.Modules.Admin.Queries;
public record GetAdminInfoByIdQuery(Guid Id) : IQuery<UserDto>
{
}
