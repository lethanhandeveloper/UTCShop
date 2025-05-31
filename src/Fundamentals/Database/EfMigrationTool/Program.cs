using BuildingBlocks.Utils;
using EfMigrationTool;
using System.Diagnostics;
Console.WriteLine("Hello, World!");

static void RunCommand(string command)
{
    var processInfo = new ProcessStartInfo("cmd", $"/c {command}")
    {
        RedirectStandardOutput = true,
        UseShellExecute = false,
        CreateNoWindow = true
    };

    var process = Process.Start(processInfo);
    process.WaitForExit();

    string output = process.StandardOutput.ReadToEnd();
    Console.WriteLine(output);
}

var servicePath = $"{SystemPathBuilder.GetBasePath()}" + "\\Services";

string[] allSubDirs = Directory.GetDirectories(servicePath, "*", SearchOption.TopDirectoryOnly);

List<CommandProperty> commands = new List<CommandProperty>();

foreach (var dir in allSubDirs)
{
    var folders = Directory.GetDirectories(dir, "*", SearchOption.TopDirectoryOnly);

    var infrastructurePath = folders.FirstOrDefault(x => x.EndsWith("Infrastructure"));



    var apiPath = folders.FirstOrDefault(x => x.EndsWith("API"));

    if (apiPath != null && infrastructurePath != null)
    {
        var infrastructureFile = Directory.GetFiles(infrastructurePath, "*Infrastructure.csproj", SearchOption.AllDirectories)
                           .FirstOrDefault();
        var apiFile = Directory.GetFiles(apiPath, "*API.csproj", SearchOption.AllDirectories)
                            .FirstOrDefault();

        CommandProperty commandProperty = new CommandProperty
        {
            ProjectLocation = infrastructureFile,
            StarupProjectLocation = apiFile
        };

        commands.Add(commandProperty);
    }

}

foreach (var command in commands)
{
    RunCommand($"dotnet ef migrations add {Guid.NewGuid().ToString()} --project {command.ProjectLocation} --startup-project {command.StarupProjectLocation}");
    RunCommand($"dotnet ef database update --project {command.ProjectLocation} --startup-project {command.StarupProjectLocation}\r\n");
}