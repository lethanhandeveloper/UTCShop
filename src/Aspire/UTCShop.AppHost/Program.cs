var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.Product_API>("product-api");

builder.AddProject<Projects.Identity_API>("user-api");

builder.AddProject<Projects.Util_API>("util-api");

builder.AddProject<Projects.YarpApiGateWay>("yarp-api-gatway");

builder.AddProject<Projects.Cart_API>("cart-api");

//builder.AddProject<Projects.BackGroundJob>("backgroundjob");

//builder.AddProject<Projects.Discount_API>("discount-api");

//builder.AddProject<Projects.BackGroundJob>("backgroundjob");

builder.AddProject<Projects.Inventory_API>("inventory-api");

//builder.AddProject<Projects.BackGroundJob>("backgroundjob");

//builder.AddProject<Projects.Configuration_API>("configuration-api");

//builder.AddProject<Projects.BackGroundJob>("backgroundjob");

//builder.AddProject<Projects.Inventory_Infrastructure>("inventory-infrastructure");

//builder.AddProject<Projects.BackGroundJob>("backgroundjob");

builder.AddProject<Projects.Storage_API>("storage-api");

//builder.AddProject<Projects.BackGroundJob>("backgroundjob");

//builder.AddProject<Projects.Configuration_API>("configuration-api");

//builder.AddProject<Projects.BackGroundJob>("backgroundjob");

//builder.AddProject<Projects.Inventory_Infrastructure>("inventory-infrastructure");

//builder.AddProject<Projects.BackGroundJob>("backgroundjob");

builder.AddProject<Projects.Product_Grpc>("product-grpc");

//builder.AddProject<Projects.BackGroundJob>("backgroundjob");

//builder.AddProject<Projects.Configuration_API>("configuration-api");

//builder.AddProject<Projects.BackGroundJob>("backgroundjob");

//builder.AddProject<Projects.Inventory_Infrastructure>("inventory-infrastructure");

//builder.AddProject<Projects.BackGroundJob>("backgroundjob");

builder.Build().Run();
