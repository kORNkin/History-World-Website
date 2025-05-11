using System;

public class RemoveExample
{
    public static void Main()
    {
        string baseStr = "ABCDEFGHIJ";

        string newStr1 = baseStr.Remove(5);
        string newStr2 = baseStr.Remove(2, 5);

        Console.WriteLine("New string1: " + newStr1);
        Console.WriteLine("New string2: " + newStr2);

    }
}
