namespace BuildingBlocks.DomainAbtractions;

public interface IAggregate<T> : IAggregate, IEntity<T>
{

}

public interface IAggregate : IAuditableEntity
{
    IReadOnlyList<IDomainEvent> DomainEvents { get; }
    IDomainEvent[] clearDomainEvents();
}