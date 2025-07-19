var builder = WebApplication.CreateBuilder(args);

//builder.Services.AddHangfire(config =>
//    config.UseMemoryStorage());
//builder.Services.AddHangfireServer();

var app = builder.Build();

//app.UseHangfireDashboard();

//RecurringJob.AddOrUpdate(
//    "my-job-id",
//    methodCall: () => Console.WriteLine($"Job executed at {DateTime.Now}"),
//    cronExpression: Cron.Minutely
//);

app.Run();
