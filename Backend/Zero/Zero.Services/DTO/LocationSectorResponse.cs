using System;
using System.Collections.Generic;
using System.Text;

namespace Zero.Services.DTO
{
    public class LocationSectorResponse
    {
        public int LocationId { get; set; }
        public string Name { get; set; }
        public List<SectorResponse> Sectors { get; set; }
    }
}
