﻿using System.Text.Json.Serialization;

namespace BuildingBlocks.Dtos;
public class CommonDto
{
    public Guid Id { get; set; }
    public DateTime? CreatedAt { get; set; } = DateTime.UtcNow;
    public string? CreatedBy { get; set; }
    public DateTime? LastUpdatedAt { get; set; } = DateTime.UtcNow;
    public string? LastUpdatedBy { get; set; }
    [JsonIgnore]
    public bool? IsDeleted { get; set; } = false;
}
