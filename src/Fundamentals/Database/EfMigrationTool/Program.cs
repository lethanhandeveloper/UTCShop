// See https://aka.ms/new-console-template for more information
using BuildingBlocks.Utils;
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

foreach (var dir in allSubDirs)
{
    var folders = Directory.GetDirectories(dir, "*", SearchOption.TopDirectoryOnly);
    foreach (var folder in folders)
    {
        if (folder.IndexOf("Infrastructure", StringComparison.OrdinalIgnoreCase) >= 0)
        {
            var file = Directory.GetFiles(folder, "*Infrastructure.csproj", SearchOption.TopDirectoryOnly).FirstOrDefault();
            Console.WriteLine(file);
        }
    }
}

//string content = File.ReadAllText(relativePath);
//Console.WriteLine("Nội dung file:");
//Console.WriteLine(content);

//RunCommand(command: $"dotnet ef migrations add new --project C:\\PProjects\\UTCShop\\src\\Services\\Identity\\Identity.Infrastructure --startup-project C:\\PProjects\\UTCShop\\src\\Services\\Identity\\Identity.API\\Identity.API.csproj");
