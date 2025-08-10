namespace Configuration.Domain.Modules.Location.Entities;

public class ProvinceEntity : Entity<Guid>
{
    public string Name { get; set; }
    public string Code { get; set; }
    public string CodeName { get; set; }
    public string DivisionType { get; set; }
    public string PhoneCode { get; set; }
}
