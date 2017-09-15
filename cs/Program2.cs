using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncTest
{
    class Program2
    {
        delegate void ResultCallback(string result);
        
        static void DownloadFile(string url, ResultCallback callback)
        {
            Thread.Sleep(1);
            callback(url);
        }

        static void DownloadInfo(string url)
        {
            DownloadFile(url + "/api/info", info =>
            {
                Console.WriteLine(info);
                DownloadFile(url + "/api/status", status =>
                {
                    Console.WriteLine(status);
                    DownloadFile(url + "/api/vehicle", vehicle =>
                    {
                        Console.WriteLine(vehicle);
                    });
                });                
            });
        }
        
        static void Main(string[] args)
        {
            for (var i = 0; i < 10; i++)
            {
                DownloadInfo("http://www.example.com/" + i);                
            }
        }
    }
}
