namespace BuildingBlocks.Messaging.Events;
public class UserInfoChangedEvent
{
    public Guid Id { get; set; }
    public string? Name { get; set; }
    public string? Age { get; set; }
    public List<Address>? Addresses { get; set; }
}


public class Address
{
    public string Street { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string ZipCode { get; set; }
    public string Country { get; set; }
}
