using System.ComponentModel.DataAnnotations.Schema;

namespace Util.API.Entities;

public class SystemConfigurationEntity : Entity<Guid>
{
    public string Name { get; set; }
    [Column(TypeName = "jsonb")]
    public List<object> Value { get; set; }
}

public class FileConfiguration
{
    public long MaxFileSize { get; set; }
    public string FileLocation { get; set; }
    public string[] AllowedFileTypes { get; set; }
}