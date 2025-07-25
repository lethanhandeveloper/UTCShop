﻿using Identity.Application.Interfaces.Repositories;
using Identity.Domain.Data;
using Identity.Domain.Entities;

namespace Identity.Infrastructure.Repositories;
public class UserRoleRepository : IUserRoleRepository
{
    private readonly IIdentityDbContext _dbContext;

    public UserRoleRepository(IIdentityDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task CreateAsync(UserRoleEntity entity, CancellationToken cancellation)
    {
        await _dbContext.Roles.AddAsync(entity);
    }

    public Task DeleteAsync(List<Guid> Ids, CancellationToken cancellation)
    {
        throw new NotImplementedException();
    }

    public Task UpdateAsync(UserRoleEntity entity, CancellationToken cancellation)
    {
        throw new NotImplementedException();
    }
}
