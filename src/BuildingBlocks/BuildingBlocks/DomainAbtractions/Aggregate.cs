namespace BuildingBlocks.DomainAbtractions;
public abstract class Aggregate<TId> : Entity<TId>, IAggregate<TId>
{
    public List<IDomainEvent> _domainEvents => new();

    public IReadOnlyList<IDomainEvent> DomainEvents => _domainEvents.AsReadOnly();

    public IDomainEvent[] clearDomainEvents()
    {
        IDomainEvent[] dequeuedEvents = _domainEvents.ToArray();

        _domainEvents.Clear();

        return dequeuedEvents;
    }
}
