using System.Text.RegularExpressions;

namespace BuildingBlocks.Utils;
public static class SystemPathBuilder
{
    public static string GetBasePath()
    {
        string currentPath = Directory.GetCurrentDirectory();
        return Regex.Match(currentPath, @".*?src").Value;
    }
}
