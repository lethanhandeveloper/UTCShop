using BuildingBlock.CQRS;
using Product.Application.Interfaces;
using Product.Application.Interfaces.Queries;
using Product.Application.Modules.Commands.Create;
using Product.Domain.Modules.Product.Entities;
using System.ComponentModel.DataAnnotations;

namespace Product.Application.Modules.Product.Commands.Create;
public class CreateProductCommandHandler : ICommandHandler<CreateProductCommand, CreateProductResult>
{
    IUnitOfWork _unitOfWork;
    ICategoryQuery _categoryQuery;

    public CreateProductCommandHandler(IUnitOfWork unitOfWork, ICategoryQuery categoryQuery)
    {
        _unitOfWork = unitOfWork;
        _categoryQuery = categoryQuery;
    }

    public async Task<CreateProductResult> Handle(CreateProductCommand command, CancellationToken cancellationToken)
    {
        var validator = new ProductDtoValidator();
        if (!validator.Validate(command.Product).IsValid)
        {
            throw new ValidationException("Id format is not valid.");
        }

        if (!await _categoryQuery.IsLeafCategory(command.Product.CategoryId.Value))
        {
            throw new ValidationException("CategoryId is not valid.");
        }

        var product = ProductEntity.Create(command.Product.Name,
            command.Product.Price.Value, command.Product.ImageUrl, command.Product.Description, command.Product.CategoryId.Value);

        await _unitOfWork._productRepository.CreateAsync(product, cancellationToken);
        await _unitOfWork.SaveChangeAsync(cancellationToken);
        return new CreateProductResult(product.Id);
    }
}
