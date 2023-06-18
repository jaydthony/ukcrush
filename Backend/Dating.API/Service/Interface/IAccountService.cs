﻿using Model.DTO;

namespace Dating.API.Service.Interface
{
    public interface IAccountService
    {
        Task<ResponseDto<string>> RegisterUser(SignUp signUp, string Role);
        Task<ResponseDto<string>> LoginUser(SignInModel signIn);
        Task<ResponseDto<string>> LogoutUser(string UserEmail);
        Task<ResponseDto<string>> ForgotPassword(string UserEmail);
        Task<ResponseDto<string>> ResetUserPassword(ResetPassword resetPassword);
        Task<ResponseDto<string>> DeleteUser(string email);
        Task<ResponseDto<string>> UpdateUser(string email, UpdateUserDto updateUser);
        Task<ResponseDto<string>> UploadUserProfilePicture(string email, IFormFile file);
        Task<ResponseDto<string>> UpdateUserRole(string email, string role);
    }
}
