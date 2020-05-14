using System;
using System.Collections.Generic;
using System.Text;

namespace Zero.Services.DTO
{
    public class MaskLogRequest
    {
        public int SectorId { get; set; }
        public string Description { get; set; }
        public bool Incident { get; set; }
    }
}
