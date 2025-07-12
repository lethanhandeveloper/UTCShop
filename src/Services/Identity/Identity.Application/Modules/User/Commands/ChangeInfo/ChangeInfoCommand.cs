using BuildingBlock.CQRS;
using Identity.Domain.ValueObjects;

namespace Identity.Application.Modules.User.Commands.ChangeInfo;
public class ChangeInfoCommand : ICommand<Guid>
{
    public Guid Id { get; set; }
    public string? Name { get; set; }
    public string? Age { get; set; }
    public List<Address>? Addresses { get; set; }
}
