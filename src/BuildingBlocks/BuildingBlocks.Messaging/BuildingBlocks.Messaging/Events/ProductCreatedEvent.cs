namespace BuildingBlocks.Messaging.Events;
public class CategoryCreatedEvent
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = "Product";

}
