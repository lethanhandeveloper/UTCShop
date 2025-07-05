using Cart.Domain.Modules.Cart.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Product.Infrastructure.Configurations;

public class CartEntityConfiguration : IEntityTypeConfiguration<CartItemEntity>
{
    public void Configure(EntityTypeBuilder<CartItemEntity> builder)
    {
        builder.HasKey(builder => builder.Id);
        builder.Property(ci => ci.ProductId)
                   .IsRequired();

        builder.Property(ci => ci.CartId)
               .IsRequired();

        builder.Property(ci => ci.Price)
               .IsRequired();

        builder.Property(ci => ci.Quantity)
               .IsRequired();
    }
}
