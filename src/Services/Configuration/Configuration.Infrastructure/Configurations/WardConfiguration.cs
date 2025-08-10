using Configuration.Domain.Modules.Location.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Configuration.Infrastructure.Configurations;

public class WardConfiguration : IEntityTypeConfiguration<WardEntity>
{
    public void Configure(EntityTypeBuilder<WardEntity> builder)
    {
        builder.HasKey(builder => builder.Id);

    }
}
