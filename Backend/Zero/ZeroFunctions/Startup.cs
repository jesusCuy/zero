using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Hosting;
using Microsoft.Azure.WebJobs.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;
using Willezone.Azure.WebJobs.Extensions.DependencyInjection;
using Zero.Data;
using Zero.Functions;
using Zero.Services;

[assembly: WebJobsStartup(typeof(Startup))]
namespace Zero.Functions
{
    internal class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            // Services
            builder.Services.AddTransient<ICoreService, CoreService>();

            // Context
            var connectionString = Environment.GetEnvironmentVariable("sqldb_connection");
            builder.Services.AddDbContext<ZeroContext>(options => options.UseSqlServer(connectionString));
        }
    }
}
