using api.Models;
using Application.AutoMapper;
using Application.Interfaces;
using Application.ViewModels;
using Application.ViewModels.Common;
using Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;

namespace api.Controllers
{
	[Authorize]
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
        public IActionResult GetById(int id)
        {
            var model = _service.GetById(id);
            return Ok(model);
        }


        [Route("getAll")]
        [HttpGet]
		[AllowAnonymous]
        public IActionResult GetByAll()
        {
            var model = _service.GetAll();
            return Ok(model);
        }

		[Route("getAllPage")]
        [HttpPost]
        [AllowAnonymous]
        public IActionResult GetByAllPage([FromBody] PagingViewModel<ContactViewModel> page)
        {
            var model = _service.GetByAllPage(page);
            return Ok(model);
        }

        [Route("save")]
        [HttpPost]
        public IActionResult Save([FromBody] ContactViewModel model)
        {
			ContactViewModel result;
            try
            { 
				if(model.Id==0)
					result = _service.Add(model.MapTo<Contact>());
				else
					result = _service.Update(model.MapTo<Contact>());
                return Ok(result.MapTo<ContactViewModel>());
            }
            catch(Exception e)
            {
                return BadRequest($"Error while saving Contact {e.Message}");
            }
        }

		[Route("remove")]
        [HttpPost]
        public IActionResult Remove([FromBody] ContactViewModel model)
        {
            try
            {
                _service.Remove(model.MapTo<Contact>());
                return Ok();
            }
            catch
            {
                return BadRequest("Error while deleting Contact");
            }
        }

		protected override void Dispose(bool disposing)
      {
         //_repository.Dispose();
         base.Dispose(disposing);
      }

    }
}

