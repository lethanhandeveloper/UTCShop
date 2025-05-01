using Product.Application.Dtos;

namespace Product.Application.Modules.Commands.Create;
public class ProductDtoValidator : FluentValidation.AbstractValidator<ProductDto>
{
    public ProductDtoValidator()
    {
        //RuleFor(x => x.Id)
        //    .NotEmpty().WithMessage("Guid khong duoc null");


        //RuleFor(x => x.Age)
        //    .InclusiveBetween(18, 60).WithMessage("Tuổi phải từ 18 đến 60");

        //RuleFor(x => x.Email)
        //    .NotEmpty().WithMessage("Email bắt buộc")
        //    .EmailAddress().WithMessage("Email không hợp lệ");
    }
}
