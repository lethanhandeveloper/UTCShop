namespace BuildingBlocks.Exception;
public class CustomExceptionBase : System.Exception
{
    public CustomExceptionBase(string message) : base(message)
    {

    }
}

public class NotFoundException : CustomExceptionBase
{
    public NotFoundException(string message) : base(message)
    {

    }
}


public class BadRequestException : CustomExceptionBase
{
    public BadRequestException(string message) : base(message)
    {

    }
}


public class UnauthorizedException : CustomExceptionBase
{
    public UnauthorizedException(string message) : base(message)
    {

    }
}


