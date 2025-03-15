namespace BuildingBlocks.Dtos;
public class CommonDto
{
    public Guid Id { get; set; }
    public DateTime? CreatedAt { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime? LastUpdatedAt { get; set; }
    public string? LastUpdatedBy { get; set; }
    public bool? IsDeleted { get; set; } = false;
}
