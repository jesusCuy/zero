using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Zero.Services;

namespace Zero.Functions
{
    public class LocationsFunction
    {
        private readonly ICoreService coreService;
        public LocationsFunction(ICoreService _coreService)
        {
            coreService = _coreService;
        }

        [FunctionName("LocationsFunction")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            var result = coreService.GetLocations();

            return new OkObjectResult(result);
        }
    }
}
