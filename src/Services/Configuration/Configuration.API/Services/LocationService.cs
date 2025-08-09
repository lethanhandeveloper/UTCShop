namespace Configuration.API.Services;

public class LocationService : ILocationService
{
    private readonly ILocationApi _locationApi;
    private readonly UtilDBContext _dbContext;

    public LocationService(ILocationApi locationApi, UtilDBContext dbContext)
    {
        _locationApi = locationApi;
        _dbContext = dbContext;
    }

    public async Task<bool> SyncLocation()
    {
        var provincesDto = await _locationApi.GetLocationAsync(3);

        var provinceEntities = new List<ProvinceEntity>();
        var districtEntities = new List<DistrictEntity>();
        var wardEntities = new List<WardEntity>();

        foreach (var provinceDto in provincesDto)
        {
            var provinceId = Guid.NewGuid();
            var provinceEntity = new ProvinceEntity
            {
                Id = provinceId,
                Name = provinceDto.Name,
                Code = provinceDto.Code.ToString(),
                CodeName = provinceDto.CodeName,
                DivisionType = provinceDto.DivisionType,
                PhoneCode = provinceDto.PhoneCode.ToString()
            };
            provinceEntities.Add(provinceEntity);

            if (provinceDto.Districts is null) continue;

            foreach (var districtDto in provinceDto.Districts)
            {
                var districtId = Guid.NewGuid();
                var districtEntity = new DistrictEntity
                {
                    Id = districtId,
                    Name = districtDto.Name,
                    Code = districtDto.Code.ToString(),
                    CodeName = districtDto.CodeName,
                    DivisionType = districtDto.DivisionType,
                    ShortCodeName = districtDto.ShortCodeName,
                    ProvinceId = provinceId
                };
                districtEntities.Add(districtEntity);

                if (districtDto.Wards is null) continue;

                foreach (var wardDto in districtDto.Wards)
                {
                    var wardEntity = new WardEntity
                    {
                        Id = Guid.NewGuid(),
                        Name = wardDto.Name,
                        Code = wardDto.Code.ToString(),
                        CodeName = wardDto.CodeName,
                        DivisionType = wardDto.DivisionType,
                        ShortCodeName = wardDto.ShortCodeName,
                        DistrictId = districtId
                    };
                    wardEntities.Add(wardEntity);
                }
            }
        }

        await _dbContext.BulkInsertAsync(provinceEntities);
        await _dbContext.BulkInsertAsync(districtEntities);
        await _dbContext.BulkInsertAsync(wardEntities);

        return true;
    }
}
