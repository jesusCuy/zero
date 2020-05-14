using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.IO;
using System.Threading.Tasks;
using Zero.Services;
using Zero.Services.DTO;

namespace Zero.Functions
{
    public class MaskLogFunction
    {
        private ICoreService coreService;

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

            string name = req.Query["name"];

            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            dynamic data = JsonConvert.DeserializeObject(requestBody);
            name = name ?? data?.name;

            MaskLogRequest request = new MaskLogRequest()
            {
                Description = "Test",
                SectorId = 1,
                Incident = false
            };
            var result = await coreService.SaveMaskLog(request).ConfigureAwait(false);

            return new OkObjectResult(result);
        }
    }
}
