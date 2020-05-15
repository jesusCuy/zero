using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zero.Data;
using Zero.Data.Model;
using Zero.Services.DTO;
using Zero.Services.Utils;

namespace Zero.Services
{
    public class CoreService : ICoreService
    {
        private readonly ZeroContext _context;
        public CoreService(ZeroContext context)
        {
            _context = context;
        }
        public async Task<MaskLogResponse> SaveMaskLog(MaskLogRequest request)
        {
            MaskLog newMaskLog = new MaskLog
            {
                Date = DateTime.UtcNow,
                Description = request.Description,
                Incident = request.Incident,
                SectorId = request.SectorId
            };
            _context.MaskLogs.Add(newMaskLog);
            await _context.SaveChangesAsync().ConfigureAwait(false);
            return newMaskLog.ToMaskLogResponse();
        }

        public List<MaskLogResponse> GetMaskLogs(int sectorId, int? locationId)
        {
            try
            {
                var result = new List<MaskLogResponse>();
                var dbEntities = _context.MaskLogs
                    .Include(m => m.Sector)
                        .ThenInclude(s => s.Location)
                    .Where(m => m.SectorId == sectorId && m.Date > DateTime.Now.AddDays(-1))
                    .OrderByDescending(m => m.Date)
                    .ToList();

                return dbEntities.ToMaskLogResponse();
            }
            catch(Exception e)
            {
                return null;
            }
        }

        public List<LocationSectorResponse> GetLocations()
        {
            try
            {

                var dbEntities = _context.Locations
                    .Include(l => l.Sectors)
                    .Select(l => new LocationSectorResponse
                    {
                        LocationId = l.LocationId,
                        Name = l.Name,
                        Sectors = l.Sectors.Select(s => new SectorResponse
                        {
                            Name = s.Name,
                            SectorId = s.SectorId
                        }).ToList()
                    })
                    .ToList();

                return dbEntities;
                // return dbEntities.ToLocationSectorResponse();
            }
            catch(Exception e)
            {
                return null;
            }
        }
    }
}
