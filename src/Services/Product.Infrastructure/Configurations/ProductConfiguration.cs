using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Product.Domain.Modules.Product.Entities;

namespace Product.Infrastructure.Configurations;

public class ProductConfiguration : IEntityTypeConfiguration<ProductEntity>
{
    public void Configure(EntityTypeBuilder<ProductEntity> builder)
    {
        builder.HasKey(builder => builder.Id);
        //builder.Property(builder => builder.Name).IsRequired();
    }
}
