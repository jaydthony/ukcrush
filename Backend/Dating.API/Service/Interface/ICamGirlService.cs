﻿using Model.DTO;

namespace Dating.API.Service.Interface
{
    public interface ICamGirlService
    {
        Task<ResponseDto<PaginatedUser>> GetCamGirlsAvailableAsync(int pageNumber, int perPageSize, CamgirlPreference camgirl);
        Task<ResponseDto<string>> SetCamgirlAsTaken(string camGirlEmail);
        Task<ResponseDto<string>> SetCamgirlAsNotTaken(string camGirlEmail);
        Task<ResponseDto<DisplayFindUserDTO>> FindCamGirlbyUserName(string userName);
    }
}
