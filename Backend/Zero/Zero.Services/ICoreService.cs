using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Zero.Services.DTO;

namespace Zero.Services
{
    public interface ICoreService
    {
        Task<MaskLogResponse> SaveMaskLog(MaskLogRequest request);

        List<MaskLogResponse> GetMaskLogs(int sectorId, int? locationId);

        List<LocationSectorResponse> GetLocations();
    }
}
