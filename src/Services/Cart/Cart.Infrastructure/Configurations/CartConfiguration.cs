using Cart.Domain.Modules.Cart.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Product.Infrastructure.Configurations;

public class CartConfiguration : IEntityTypeConfiguration<CartEntity>
{
    public void Configure(EntityTypeBuilder<CartEntity> builder)
    {
        builder.HasKey(builder => builder.Id);
        builder.Property(c => c.CustomerId)
                   .IsRequired();
        builder.Property(c => c.TotalPrice)
                   .IsRequired();
        builder.HasMany(c => c.CartItems)
                  .WithOne(ci => ci.Cart)
                  .HasForeignKey(ci => ci.CartId)
                  .OnDelete(DeleteBehavior.Cascade);
    }
}
