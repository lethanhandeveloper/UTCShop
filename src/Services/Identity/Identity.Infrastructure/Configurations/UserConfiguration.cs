using Identity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Identity.Infrastructure.Configurations;
public class UserConfiguration : IEntityTypeConfiguration<UserEntity>
{
    public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<UserEntity> builder)
    {
        builder.HasKey(builder => builder.Id);
        builder.Ignore(builder => builder.AccessToken);
        builder.Ignore(builder => builder.RefreshToken);
    }
}
