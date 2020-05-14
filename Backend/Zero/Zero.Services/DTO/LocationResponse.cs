using NetTopologySuite.Geometries;
using System;
using System.Collections.Generic;
using System.Text;

namespace Zero.Services.DTO
{
    public class LocationResponse
    {
        public string Sector { get; set; }
        public string Location { get; set; }
        public float Lat { get; set; }
        public float Long { get; set; }
    }
}
