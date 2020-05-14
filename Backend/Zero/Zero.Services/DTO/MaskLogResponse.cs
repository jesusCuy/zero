using System;
using System.Collections.Generic;
using System.Text;

namespace Zero.Services.DTO
{
    public class MaskLogResponse
    {
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public bool Incident { get; set; }
        public LocationResponse Location { get; set; }
    }
}
