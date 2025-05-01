var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.Product_API>("product-api");

builder.AddProject<Projects.User_API>("user-api");

builder.AddProject<Projects.Util_API>("util-api");

builder.AddProject<Projects.YarpApiGateWay>("yarp-api-gatway");

builder.Build().Run();
