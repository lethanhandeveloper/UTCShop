using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Util.API.Entities;

namespace Product.Infrastructure.Configurations;

public class DistrictConfiguration : IEntityTypeConfiguration<DistrictEntity>
{
    public void Configure(EntityTypeBuilder<DistrictEntity> builder)
    {
        builder.HasKey(builder => builder.Id);

    }
}
