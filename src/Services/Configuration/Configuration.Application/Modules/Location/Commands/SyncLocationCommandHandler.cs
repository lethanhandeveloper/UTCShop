using BuildingBlock.CQRS;
using Configuration.Application.Interfaces.ExternalService;
using Configuration.Application.Interfaces.Repositories;
using Configuration.Domain.Modules.Location.Entities;
namespace Configuration.Application.Modules.Location.Commands;
public class UpdateCartCommandHandler(ILocationService locationService, IUnitOfWork _unitOfWork) : ICommandHandler<SyncLocationCommand, bool>
{
    public async Task<bool> Handle(SyncLocationCommand command, CancellationToken cancellationToken)
    {
        var provincesDto = await locationService.FetchLocationList();
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
                PhoneCode = provinceDto.PhoneCode.ToString(),
                IsDeleted = false
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
                    ProvinceId = provinceId,
                    IsDeleted = false
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
                        DistrictId = districtId,
                        IsDeleted = false
                    };
                    wardEntities.Add(wardEntity);
                }
            }
        }

        await _unitOfWork.BeginTransactionAsync(cancellationToken);

        try
        {
            await _unitOfWork._provinceRepository.ClearAll(cancellationToken);
            await _unitOfWork._districtRepository.ClearAll(cancellationToken);
            await _unitOfWork._wardRepository.ClearAll(cancellationToken);

            await _unitOfWork._configurationDbContext.BulkInsertAsync(provinceEntities);
            await _unitOfWork._configurationDbContext.BulkInsertAsync(districtEntities);
            await _unitOfWork._configurationDbContext.BulkInsertAsync(wardEntities);

            await _unitOfWork.CommitTransactionAsync(cancellationToken);
        }
        catch
        {
            await _unitOfWork.RollbackTransactionAsync(cancellationToken);
            return false;
        }

        return true;
    }
}