using BuildingBlock.CQRS;

namespace Configuration.Application.Modules.Location.Commands;
public record SyncLocationCommand() : ICommand<bool>
{
}
