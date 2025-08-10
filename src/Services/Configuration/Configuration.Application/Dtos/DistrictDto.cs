namespace Configuration.Application.Dtos;

public class DistrictDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Code { get; set; }
    public string CodeName { get; set; }
    public string DivisionType { get; set; }
    public string ShortCodeName { get; set; }
    public Guid ProvinceId { get; set; }
}

