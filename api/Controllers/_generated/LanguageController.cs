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
    public partial class LanguageController : BaseController
    {
        
		private readonly ILanguageAppService _service;

        public LanguageController(ILanguageAppService service, IHostingEnvironment hostingEnvironment, IOptions<AppSettings> settings)
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
        public IActionResult GetByAllPage([FromBody] PagingViewModel<LanguageViewModel> page)
        {
            var model = _service.GetByAllPage(page);
            return Ok(model);
        }

        [Route("save")]
        [HttpPost]
        public IActionResult Save([FromBody] LanguageViewModel model)
        {
			LanguageViewModel result;
            try
            { 
				if(model.Id==0)
					result = _service.Add(model.MapTo<Language>());
				else
					result = _service.Update(model.MapTo<Language>());
                return Ok(result.MapTo<LanguageViewModel>());
            }
            catch(Exception e)
            {
                return BadRequest($"Error while saving Language {e.Message}");
            }
        }

		[Route("remove")]
        [HttpPost]
        public IActionResult Remove([FromBody] LanguageViewModel model)
        {
            try
            {
                _service.Remove(model.MapTo<Language>());
                return Ok();
            }
            catch
            {
                return BadRequest("Error while deleting Language");
            }
        }

		protected override void Dispose(bool disposing)
      {
         //_repository.Dispose();
         base.Dispose(disposing);
      }

    }
}

