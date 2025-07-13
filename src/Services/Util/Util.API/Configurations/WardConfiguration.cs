using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Util.API.Entities;

namespace Product.Infrastructure.Configurations;

public class WardConfiguration : IEntityTypeConfiguration<WardEntity>
{
    public void Configure(EntityTypeBuilder<WardEntity> builder)
    {
        builder.HasKey(builder => builder.Id);

    }
}
