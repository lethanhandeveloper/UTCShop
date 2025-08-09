var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.Product_API>("product-api");

builder.AddProject<Projects.Identity_API>("user-api");

builder.AddProject<Projects.Util_API>("util-api");

builder.AddProject<Projects.YarpApiGateWay>("yarp-api-gatway");

builder.AddProject<Projects.Cart_API>("cart-api");

builder.AddProject<Projects.Inventory_API>("inventory-api");

builder.AddProject<Projects.Storage_API>("storage-api");

builder.AddProject<Projects.Product_Grpc>("product-grpc");


builder.Build().Run();
