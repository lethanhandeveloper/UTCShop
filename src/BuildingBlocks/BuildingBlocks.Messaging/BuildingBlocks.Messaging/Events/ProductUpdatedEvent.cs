namespace BuildingBlocks.Messaging.Events;
public class ProductUpdatedEvent
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = default!;
    public decimal Price { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
    public string Description { get; set; } = default!;
}
