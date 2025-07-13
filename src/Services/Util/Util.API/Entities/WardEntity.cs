namespace Util.API.Entities;

public class WardEntity : Entity<Guid>
{
    public string Name { get; set; }
    public string Code { get; set; }
    public string CodeName { get; set; }
    public string DivisionType { get; set; }
    public string ShortCodeName { get; set; }
    public Guid DistrictId { get; set; }
}
