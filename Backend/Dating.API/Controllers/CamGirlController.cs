using CloudinaryDotNet.Actions;
using Dating.API.Service.Implementation;
using Dating.API.Service.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model.DTO;

namespace Dating.API.Controllers
{
    [Route("api/camgirl")]
    [ApiController]
    public class CamGirlController : ControllerBase
    {
        private readonly ICamGirlService _camGirlService;

        public CamGirlController( ICamGirlService camGirlService)
        {
            _camGirlService = camGirlService;
        }
        [HttpPost("available/{page_number}")]
        public async Task<IActionResult> GetCamGirlAvailableAsync(int page_number, CamgirlPreference camgirl) 
        {
            var result = await _camGirlService.GetCamGirlsAvailableAsync(page_number, 5, camgirl);
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
        [HttpPost("match/{email}")]
        public async Task<IActionResult> MatchCamgirl(string email)
        {
            var result = await _camGirlService.SetCamgirlAsTaken(email);
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
        [HttpPost("unmatch/{email}")]
        public async Task<IActionResult> UnMatchCamgirl(string email)
        {
            var result = await _camGirlService.SetCamgirlAsNotTaken(email);
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
        [HttpGet("{username}")]
        public async Task<IActionResult> GetCamgirl(string username)
        {
            var result = await _camGirlService.FindCamGirlbyUserName(username);
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
