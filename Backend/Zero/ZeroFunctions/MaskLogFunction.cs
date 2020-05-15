using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Devices;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Zero.Services;
using Zero.Services.DTO;

namespace Zero.Functions
{
    public class MaskLogFunction
    {
        private ICoreService coreService;
        private static ServiceClient serviceClient;
        private readonly static string connectionString = "HostName=QiBase.azure-devices.net;SharedAccessKeyName=service;SharedAccessKey=1ggF1Ixns3UBKYUzULvOw7jLYwqhMGuB9lmkmkAY10o=";

        public MaskLogFunction(ICoreService _coreService)
        {
            coreService = _coreService;
        }

        [FunctionName("MaskLogFunction")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            if (req.Method == "POST")
            {
                MaskLogRequest request = new MaskLogRequest()
                {
                    Description = "Test " + Guid.NewGuid().ToString(),
                    SectorId = 1,
                    Incident = DateTime.Now.Millisecond < 200
                };
                var postResult = await coreService.SaveMaskLog(request).ConfigureAwait(false);

                if(postResult.Incident)
                {
                    // Call HUB if mask has incident
                    serviceClient = ServiceClient.CreateFromConnectionString(connectionString);
                    InvokeMethod().GetAwaiter();
                }

                return new OkObjectResult(postResult);


            }
            else if (req.Method == "GET")
            {
                string sector = req.Query["sector"];
                string location = req.Query["location"];
                int sectorId = 0;
                if(int.TryParse(sector, out sectorId))
                {

                    var getResult = coreService.GetMaskLogs(sectorId, null);
                    return new OkObjectResult(getResult);
                }
                return new OkObjectResult(null);
            }
            //string name = req.Query["name"];

            //string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            //dynamic data = JsonConvert.DeserializeObject(requestBody);
            //name = name ?? data?.name;


            return new OkObjectResult(null);
        }

        private static async Task InvokeMethod()
        {
            try
            {
                var commandMessage = new Message(Encoding.ASCII.GetBytes("Turn off"));
                commandMessage.Properties.Add("ACTION", "OFF");
                await serviceClient.SendAsync("qi-esp32", commandMessage);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error while sending message to device: \n{ex.Message}");
                throw;
            }
        }
    }
}
