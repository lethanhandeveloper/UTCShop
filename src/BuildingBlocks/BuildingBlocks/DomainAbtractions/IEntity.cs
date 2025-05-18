using BuildingBlocks.DomainAbtractions;

public interface IEntity<T> : IAuditableEntity
{
    public T Id { get; set; }
}