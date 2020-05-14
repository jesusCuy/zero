using Microsoft.Azure.Devices;
using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zero
{
    class Program
    {
        private static ServiceClient s_serviceClient;
        private readonly static string s_connectionString = "HostName=QiBase.azure-devices.net;SharedAccessKeyName=service;SharedAccessKey=1ggF1Ixns3UBKYUzULvOw7jLYwqhMGuB9lmkmkAY10o=";

        static void Main(string[] args)
        {
            Console.WriteLine("Arre! \n");
            s_serviceClient = ServiceClient.CreateFromConnectionString(s_connectionString);
            InvokeMethod().GetAwaiter();
            Console.WriteLine("Press Enter to exit.");
            Console.ReadLine();
        }

        private static async Task InvokeMethod()
        {
            try
            {
                var commandMessage = new Message(Encoding.ASCII.GetBytes("Turn off"));
                commandMessage.Properties.Add("ACTION", "OFF");
                await s_serviceClient.SendAsync("qi-esp32", commandMessage);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error while sending message to device: \n{ex.Message}");
                throw;
            }
        }
    }
}
