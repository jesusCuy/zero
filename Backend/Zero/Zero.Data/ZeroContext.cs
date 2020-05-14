using Microsoft.EntityFrameworkCore;
using System;
using Zero.Data.Model;

namespace Zero.Data
{
    public class ZeroContext : DbContext
    {
        public ZeroContext(DbContextOptions<ZeroContext> dbContextOptions) : base(dbContextOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }

        public DbSet<Location> Locations { get; set; }

        public DbSet<Sector> Sectors { get; set; }
        public DbSet<MaskLog> MaskLogs { get; set; }


    }
}
