using System.Text.Json.Serialization;

namespace Configuration.Application.Dtos;

public class District
{
    [JsonPropertyName("name")]
    public string Name { get; set; }
    [JsonPropertyName("code")]
    public int Code { get; set; }
    [JsonPropertyName("codename")]
    public string CodeName { get; set; }
    [JsonPropertyName("division_type")]
    public string DivisionType { get; set; }
    [JsonPropertyName("short_codename")]
    public string ShortCodeName { get; set; }
    [JsonPropertyName("wards")]
    public List<Ward> Wards { get; set; }
}
