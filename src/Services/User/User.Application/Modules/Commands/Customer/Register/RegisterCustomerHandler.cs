using BuildingBlock.CQRS;
using User.Application.Dtos;

namespace User.Application.Modules.Commands.Customer.Register;
public class RegisterCustomerHandler : ICommandHandler<RegisterCustomerCommand, LoginUserResponseDto>
{
    public Task<LoginUserResponseDto> Handle(RegisterCustomerCommand command, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
