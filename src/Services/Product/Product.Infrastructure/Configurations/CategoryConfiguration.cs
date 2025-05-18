using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Product.Domain.Modules.Product.Entities;

namespace Product.Infrastructure.Configurations;

public class CategoryConfiguration : IEntityTypeConfiguration<CategoryEntity>
{
    public void Configure(EntityTypeBuilder<CategoryEntity> builder)
    {
        builder.HasKey(builder => builder.Id);
        builder.HasMany(c => c.ChildCategories).WithOne().HasForeignKey(c => c.ParentId);
    }
}
