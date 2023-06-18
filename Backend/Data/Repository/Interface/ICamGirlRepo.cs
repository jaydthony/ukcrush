using Model.DTO;
using Model.Enitities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repository.Interface
{
    public interface ICamGirlRepo
    {
        Task<PaginatedUser> GetCamGirlsAvailableAsync(int pageNumber, int perPageSize, CamgirlPreference camgirl);
        Task<ApplicationUser> FindCamGirlbyUserName(string userName);
        Task<bool> CheckInCamgirlRole(string username);
    }
}
