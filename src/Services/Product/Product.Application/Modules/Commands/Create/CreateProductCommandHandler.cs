using BuildingBlock.CQRS;
using Product.Application.Interfaces;
using Product.Domain.Modules.Product.Entities;
using System.ComponentModel.DataAnnotations;

namespace Product.Application.Modules.Commands.Create;
public class CreateProductCommandHandler : ICommandHandler<CreateProductCommand, CreateProductResult>
{
    IUnitOfWork _unitOfWork;

    public CreateProductCommandHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<CreateProductResult> Handle(CreateProductCommand command, CancellationToken cancellationToken)
    {
        var validator = new ProductDtoValidator();
        if (!validator.Validate(command.Product).IsValid)
        {
            throw new ValidationException("Id format is not valid.");
        }
        var product = ProductEntity.Create(command.Product.Name,
            command.Product.Price, command.Product.ImageUrl, command.Product.Description, command.Product.CategoryId);

        var result = await _unitOfWork._productRepository.CreateAsync(product, cancellationToken);
        return new CreateProductResult(result);
    }
}
