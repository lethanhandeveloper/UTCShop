using BuildingBlocks.Dtos;
using BuildingBlocks.Enums;
using BuildingBlocks.Exception;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;


namespace BuildingBlocks.Attribute;

[AttributeUsage(AttributeTargets.All)]
public class ApiResultExceptionAttribute : ExceptionFilterAttribute
{
    public override void OnException(ExceptionContext context)
    {
        switch (context.Exception)
        {
            case NotFoundException:
                context.Result = new ObjectResult(new ApiResponse<object>
                {
                    Success = false,
                    Data = null,
                    Message = context.Exception.Message,
                    StatusCode = HttpStatusCodeEnum.NotFound
                });

                break;

        }
    }
}
