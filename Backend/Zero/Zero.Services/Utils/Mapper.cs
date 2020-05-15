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
        public static List<MaskLogResponse> ToMaskLogResponse(this IEnumerable<MaskLog> list)
        {
            var result = new List<MaskLogResponse>();

            foreach (MaskLog item in list)
            {
                result.Add(item.ToMaskLogResponse());
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

        public static LocationSectorResponse ToLocationSectorResponse(this Location item)
        {
            var result = new LocationSectorResponse()
            {
                LocationId = item.LocationId,
                Name = item.Name,
                Sectors = item.Sectors?.ToSectorResponse()
            };
            return result;
        }
        public static List<LocationSectorResponse> ToLocationSectorResponse(this IEnumerable<Location> list)
        {
            var result = new List<LocationSectorResponse>();

            foreach (Location item in list)
            {
                result.Add(item.ToLocationSectorResponse());
            };

            return result;
        }

        public static SectorResponse ToSectorResponse(this Sector item)
        {
            var result = new SectorResponse()
            {
                SectorId = item.SectorId,
                Name = item.Name
            };
            return result;
        }
        public static List<SectorResponse> ToSectorResponse(this IEnumerable<Sector> list)
        {
            var result = new List<SectorResponse>();
            
            foreach(Sector item in list) 
            {
                result.Add(item.ToSectorResponse());
            };

            return result;
        }
    }
}
