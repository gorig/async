using System;
using System.Collections.Generic;

namespace AsyncTest
{
    class Yield
    {
        static IEnumerable<int> YieldTest()
        {
            int i = 0;
            for (;;)
            {
                yield return i++;
            }
        }
        
        static void YieldMain(string[] args)
        {
            foreach (var i in YieldTest())
            {
                Console.WriteLine(i);
                if (i > 20) break;
            }
        }
    }
}
