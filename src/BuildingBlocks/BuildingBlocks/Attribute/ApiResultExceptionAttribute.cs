using BuildingBlocks.Dtos;
using BuildingBlocks.Enums;
using BuildingBlocks.Exception;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;


namespace BuildingBlocks.Attribute;

[AttributeUsage(AttributeTargets.All)]
public class ApiResultExceptionAttribute : ExceptionFilterAttribute
{
    private readonly ILogger<ApiResultExceptionAttribute> _logger;

    public ApiResultExceptionAttribute()
    {
    }

    public ApiResultExceptionAttribute(ILogger<ApiResultExceptionAttribute> logger)
    {
        _logger = logger;
    }

    public override void OnException(ExceptionContext context)
    {
        //_logger.LogError(context.Exception.ToString());
        var env = (IWebHostEnvironment)context.HttpContext.RequestServices.GetService(typeof(IWebHostEnvironment));

        var exception = context.Exception;
        var (message, statusCode) = exception switch
        {
            NotFoundException => (exception.Message, HttpStatusCodeEnum.NotFound),
            BadRequestException => (exception.Message, HttpStatusCodeEnum.BadRequest),
            ValidationException => (exception.Message, HttpStatusCodeEnum.BadRequest),
            UnauthorizedException => (exception.Message, HttpStatusCodeEnum.Unauthorized),

            _ => (exception.InnerException.ToString(), HttpStatusCodeEnum.InternalServerError)
        };

        //if (!env.IsDevelopment() && statusCode == HttpStatusCodeEnum.InternalServerError)
        //{
        //    message = "Internal server error";
        //}

        context.Result = new ObjectResult(new ApiResponse<object>
        {
            Success = false,
            Data = null,
            Message = message,
            StatusCode = statusCode
        });
        //{
        //    StatusCode = (int)statusCode
        //};
    }
}
