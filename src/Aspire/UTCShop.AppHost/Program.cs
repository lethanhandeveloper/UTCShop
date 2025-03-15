var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.Product_API>("product-api");

builder.AddProject<Projects.User_API>("user-api");

builder.Build().Run();
