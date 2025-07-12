
using Microsoft.Extensions.Caching.Distributed;
using System.Text.Json;

namespace BuildingBlocks.Cache;
public class BaseCacheService : IBaseCacheService
{
    private readonly IDistributedCache _cache;
    private static readonly JsonSerializerOptions _jsonOptions = new(JsonSerializerDefaults.Web);

    public BaseCacheService(IDistributedCache cache)
    {
        _cache = cache;
    }

    public async Task<T?> GetAsync<T>(string key)
    {
        var json = await _cache.GetStringAsync(key);
        return json is null ? default : JsonSerializer.Deserialize<T>(json, _jsonOptions);
    }

    public async Task<T?> GetOrAddAsync<T>(string key, Func<Task<T>> factory, TimeSpan? expiration = null)
    {
        var cached = await GetAsync<T>(key);
        if (cached is not null)
            return cached;

        var data = await factory();
        await SetAsync(key, data, expiration);
        return data;
    }

    public async Task RemoveAsync(string key)
    {
        await _cache.RemoveAsync(key);
    }

    public async Task SetAsync<T>(string key, T value, TimeSpan? expiration = null)
    {
        var options = new DistributedCacheEntryOptions
        {
            AbsoluteExpirationRelativeToNow = expiration ?? TimeSpan.FromMinutes(10)
        };

        var json = JsonSerializer.Serialize(value, _jsonOptions);
        await _cache.SetStringAsync(key, json, options);
    }
}
