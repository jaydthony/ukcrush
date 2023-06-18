using Dating.API.Service.Interface;
using Microsoft.AspNetCore.Mvc;
using Model.DTO;

namespace Dating.API.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;
        private readonly IEmailServices _emailServices;

        public AccountController(IAccountService accountService, IEmailServices emailServices)
        {
            _accountService = accountService;
            _emailServices = emailServices;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(string role, SignUp signUp)
        {
            var registerUser = await _accountService.RegisterUser(signUp, role);
            if (registerUser.StatusCode == 200)
            {
                return Ok(registerUser);
            }
            else if (registerUser.StatusCode == 404)
            {
                return NotFound(registerUser);
            }
            else
            {
                return BadRequest(registerUser);
            }
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(SignInModel signIn)
        {
            var loginUser = await _accountService.LoginUser(signIn);
            if (loginUser.StatusCode == 200)
            {
                return Ok(loginUser);
            }
            else if (loginUser.StatusCode == 404)
            {
                return NotFound(loginUser);
            }
            else
            {
                return BadRequest(loginUser);
            }
        }
        [HttpPost("logout")]
        public async Task<IActionResult> Logout(string loginEmail)
        {
            var result = await _accountService.LogoutUser(loginEmail);
            if (result.StatusCode == 200)
            {
                return Ok(result);
            }
            else if (result.StatusCode == 404)
            {
                return NotFound(result);
            }
            else
            {
                return BadRequest(result);
            }
        }
        [HttpPost("forgot_password")]
        public async Task<IActionResult> ForgotPassword(string email)
        {
            var result = await _accountService.ForgotPassword(email);
            if (result.StatusCode == 200)
            {
                var message = new Message(new string[] { email }, "Reset Password Code", $"<p>Your reset password code is below<p><br/><h6>{result.Result}</h6><br/> <p>Please use it in your reset password page</p>");
                _emailServices.SendEmail(message);
                result.Result = $"Forgot passsword token was successfully sent to {email}";
                return Ok(result);
            }
            else if (result.StatusCode == 404)
            {
                return NotFound(result);
            }
            else
            {
                return BadRequest(result);
            }

        }
        [HttpPost("reset_password")]
        public async Task<IActionResult> ResetPassword(ResetPassword resetPassword)
        {
            var result = await _accountService.ResetUserPassword(resetPassword);
            if (result.StatusCode == 200)
            {
                return Ok(result);
            }
            else if (result.StatusCode == 404)
            {
                return NotFound(result);
            }
            else
            {
                return BadRequest(result);
            }
        }
        [HttpDelete("delete_user/{email}")]
        public async Task<IActionResult> DeleteUser(string email)
        {
            var result = await _accountService.DeleteUser(email);
            if (result.StatusCode == 200)
            {
                return Ok(result);
            }
            else if (result.StatusCode == 404)
            {
                return NotFound(result);
            }
            else
            {
                return BadRequest(result);
            }
        }
        [HttpPatch("update_details/{email}")]
        public async Task<IActionResult> UpdateUserInfo(string email, UpdateUserDto updateUser)
        {
            var result = await _accountService.UpdateUser(email, updateUser);
            if (result.StatusCode == 200)
            {
                return Ok(result);
            }
            else if (result.StatusCode == 404)
            {
                return NotFound(result);
            }
            else
            {
                return BadRequest(result);
            }
        }
        [HttpPatch("update_picture/{email}")]
        public async Task<IActionResult> UploadUserPicture(string email, IFormFile file)
        {
            var result = await _accountService.UploadUserProfilePicture(email, file);
            if (result.StatusCode == 200)
            {
                return Ok(result);
            }
            else if (result.StatusCode == 404)
            {
                return NotFound(result);
            }
            else
            {
                return BadRequest(result);
            }
        }
        [HttpPatch("update_role/{email}")]
        public async Task<IActionResult> UpdateUserRoleAsync(string email, string role)
        {
            var result = await _accountService.UpdateUserRole(email, role);
            if (result.StatusCode == 200)
            {
                return Ok(result);
            }
            else if (result.StatusCode == 404)
            {
                return NotFound(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

    }
}
