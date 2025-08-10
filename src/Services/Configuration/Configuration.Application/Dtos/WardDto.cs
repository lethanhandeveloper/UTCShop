namespace Configuration.Application.Dtos;

public class WardDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Code { get; set; }
    public string CodeName { get; set; }
    public string DivisionType { get; set; }
    public string ShortCodeName { get; set; }
    public Guid DistrictId { get; set; }
}

