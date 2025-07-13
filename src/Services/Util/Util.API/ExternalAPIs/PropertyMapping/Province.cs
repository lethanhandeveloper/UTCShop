using System.Text.Json.Serialization;

namespace Util.API.ExternalAPIs;

public class Province
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
