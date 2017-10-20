using Application.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace api.Controllers
{
    public partial class ContactController
    {
        [HttpPost]
        [Route("SendEmail")]
        [AllowAnonymous]
        public async Task<IActionResult> SendEmail([FromBody] ContactViewModel contactModel)
        {
            try
            {
                await Task.Run(() => _service.SendEmail(contactModel));
                return Ok();
            }
            catch (System.Exception e)
            {
                return BadRequest(e.Message);
            }
        }
	}
}

