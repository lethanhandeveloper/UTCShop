using Microsoft.EntityFrameworkCore;
using User.Domain;

namespace User.Infrastructure.Configurations;
public class UserConfiguration : IEntityTypeConfiguration<UserEntity>
{
    public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<UserEntity> builder)
    {
        builder.HasKey(builder => builder.Id);
        builder.Ignore(builder => builder.JwtToken);
    }
}
