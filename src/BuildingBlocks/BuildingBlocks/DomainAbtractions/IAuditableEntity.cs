namespace BuildingBlocks.DomainAbtractions;
public interface IAuditableEntity
{
    public DateTime? CreatedAt { get; set; }
    public Guid? CreatedBy { get; set; }
    public DateTime? LastUpdatedAt { get; set; }
    public Guid? LastUpdatedBy { get; set; }
    public bool? IsDeleted { get; set; }
}
