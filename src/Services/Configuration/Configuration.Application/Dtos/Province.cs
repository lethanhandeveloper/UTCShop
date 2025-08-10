using System.Text.Json.Serialization;

namespace Configuration.Application.Dtos;

public class ProvinceFetchingResultDto
{
    [JsonPropertyName("name")]
    public string Name { get; set; }
    [JsonPropertyName("code")]
    public int Code { get; set; }
    [JsonPropertyName("codename")]
    public string CodeName { get; set; }
    [JsonPropertyName("division_type")]
    public string DivisionType { get; set; }
    [JsonPropertyName("phone_code")]
    public int PhoneCode { get; set; }
    [JsonPropertyName("districts")]
    public List<District> Districts { get; set; }
}
