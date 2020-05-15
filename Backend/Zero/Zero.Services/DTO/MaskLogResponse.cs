using System;
using System.Collections.Generic;
using System.Text;

namespace Zero.Services.DTO
{
    public class MaskLogResponse
    {
        public DateTime Date { get; set; }
        public string DateString { get { return Date.ToString("yyyy-MM-dd HH:mm:ss"); }}
        public string Description { get; set; }
        public bool Incident { get; set; }
        public LocationResponse Location { get; set; }
    }
}
