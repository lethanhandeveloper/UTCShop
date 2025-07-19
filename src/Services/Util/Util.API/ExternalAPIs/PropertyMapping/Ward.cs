using System.Text.Json.Serialization;

namespace Util.API.ExternalAPIs;

public class Ward
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
}
