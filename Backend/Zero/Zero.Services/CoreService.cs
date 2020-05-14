using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
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

        public async Task<List<MaskLogResponse>> GetMaskLogs()
        {
            var result = new List<MaskLogResponse>();

            return result;
        }
    }
}
