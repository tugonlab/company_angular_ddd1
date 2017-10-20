using api.Models;
using Application.AutoMapper;
using Application.Interfaces;
using Application.ViewModels;
using Application.ViewModels.Common;
using CrossCutting.Extensions;
using Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Threading.Tasks;

namespace api.Controllers
{
	//[Authorize]
    [Route("api/[controller]")]
    public partial class ContactController : BaseController
    {
        
		private readonly IContactAppService _service;

        public ContactController(IContactAppService service, IHostingEnvironment hostingEnvironment, IOptions<AppSettings> settings)
			: base(hostingEnvironment, settings)
        {
            _service = service;
        }

		[Route("getById/{id}")]
        [HttpGet]
		[AllowAnonymous]
        public async Task<IActionResult> GetById(int id)
        {
            var model = await Task.FromResult(_service.GetById(id));
            return Ok(model);
        }


        [Route("getAll")]
        [HttpGet]
		[AllowAnonymous]
        public async Task<IActionResult> GetByAll()
        {
            var model = await Task.FromResult(_service.GetAll());
            return Ok(model);
        }

		[Route("getAllPage")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> GetByAllPage([FromBody] PagingViewModel<ContactViewModel> page)
        {
            var model = await Task.FromResult(_service.GetByAllPage(page));
            return Ok(model);
        }

        [Route("save")]
        [HttpPost]
        public async Task<IActionResult> Save([FromBody] ContactViewModel model)
        {
			ContactViewModel result;
            try
            { 
				if(model.Id==0)
                    result = await Task.FromResult(_service.Add(model.MapTo<Contact>()));
				else
                    result = await Task.FromResult(_service.Update(model.MapTo<Contact>()));
                return Ok(result.MapTo<ContactViewModel>());
            }
            catch(Exception e)
            {
                return BadRequest($"Error while saving Contact {e.Message}");
            }
        }

		[Route("remove")]
        [HttpPost]
        public async Task<IActionResult> Remove([FromBody] ContactViewModel model)
        {
            try
            {
                await Task.Run(() => _service.Remove(model.MapTo<Contact>()));
                return Ok();
            }
            catch
            {
                return BadRequest("Error while deleting Contact");
            }
        }

		protected override void Dispose(bool disposing)
      {
			_service.Dispose();
         base.Dispose(disposing);
      }

    }
}

