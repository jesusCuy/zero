using System;
using System.Collections.Generic;
using System.Text;
using Zero.Data.Model;
using Zero.Services.DTO;

namespace Zero.Services.Utils
{
    static class Mapper
    {
        public static MaskLogResponse ToMaskLogResponse(this MaskLog item)
        {
            var result = new MaskLogResponse()
            {
                Date = item.Date,
                Description = item.Description,
                Incident = item.Incident,
                Location = item.Sector?.ToLocationResponse()
            };
            return result;
        }

        public static LocationResponse ToLocationResponse(this Sector item)
        {
            var result = new LocationResponse()
            {
                Sector = item.Name,
                Location = item.Location?.Name,
                Lat = item.Location?.Lat,
                Long = item.Location?.Long
            };
            return result;
        }
    }
}
