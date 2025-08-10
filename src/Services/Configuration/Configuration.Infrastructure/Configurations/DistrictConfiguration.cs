using Configuration.Domain.Modules.Location.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Configuration.Infrastructure.Configurations;

public class DistrictConfiguration : IEntityTypeConfiguration<DistrictEntity>
{
    public void Configure(EntityTypeBuilder<DistrictEntity> builder)
    {
        builder.HasKey(builder => builder.Id);

    }
}
