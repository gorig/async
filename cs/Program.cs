using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncTest
{
    class Program
    {
        static async Task<string> DownloadFile(string url)
        {
            return await Task.Run(() =>
            {
                Thread.Sleep(1);
                return url;
            });
        }

        static async Task DownloadInfo(string url)
        {
            var info = await DownloadFile(url + "/api/info");
            Console.WriteLine(info);
            
            var status = await DownloadFile(url + "/api/status");
            Console.WriteLine(status);
            
            var vehicle = await DownloadFile(url + "/api/vehicle");
            Console.WriteLine(vehicle);
        }
        
        static void Main1(string[] args)
        {
            var tasks = new List<Task>();
            for (int i = 0; i < 10; i++)
            {
                tasks.Add(DownloadInfo("http://www.example.com/" + i));
            }

            Task.WhenAll(tasks).Wait();
        }
    }
}
