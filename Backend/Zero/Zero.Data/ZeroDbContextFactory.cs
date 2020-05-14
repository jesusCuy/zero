using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.FileExtensions;
using Microsoft.Extensions.Configuration.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Zero.Data
{
    public class ZeroDbContextFactory : IDesignTimeDbContextFactory<ZeroContext>
    {
        public ZeroContext CreateDbContext(string[] args)
        {
            //IConfigurationRoot configuration = new ConfigurationBuilder()
            //    .SetBasePath(Directory.GetCurrentDirectory().)
            //    .AddJsonFile("local.settings.json")
            //    .Build();

            var builder = new DbContextOptionsBuilder<ZeroContext>();
            // var connectionString = configuration.GetConnectionString("sqldb_connection");
            var connectionString = "Server=tcp:zero.database.windows.net,1433;Initial Catalog=ZeroDB;Persist Security Info=False;User ID=zero;Password=Covid123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

            builder.UseSqlServer(connectionString);
            return new ZeroContext(builder.Options);
        }
    }
}
