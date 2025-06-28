using Identity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Identity.Infrastructure.Configurations;
public class AccountConfiguration : IEntityTypeConfiguration<AccountEntity>
{
    public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<AccountEntity> builder)
    {
        builder.HasKey(builder => builder.Id);
        builder.Ignore(builder => builder.AccessToken);
        builder.Ignore(builder => builder.RefreshToken);
        builder.HasOne(x => x.User).WithMany().HasForeignKey(x => x.UserId);
    }
}
