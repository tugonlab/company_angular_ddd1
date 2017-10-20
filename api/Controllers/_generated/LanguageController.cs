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
        public async Task<IActionResult> GetByAllPage([FromBody] PagingViewModel<LanguageViewModel> page)
        {
            var model = await Task.FromResult(_service.GetByAllPage(page));
            return Ok(model);
        }

        [Route("save")]
        [HttpPost]
        public async Task<IActionResult> Save([FromBody] LanguageViewModel model)
        {
			LanguageViewModel result;
            try
            { 
				if(model.Id==0)
					result = await Task.FromResult(_service.Add(model.MapTo<Language>()));
				else
					result = await Task.FromResult(_service.Update(model.MapTo<Language>()));
                return Ok(result.MapTo<LanguageViewModel>());
            }
            catch(Exception e)
            {
                return BadRequest($"Error while saving Language {e.Message}");
            }
        }

		[Route("remove")]
        [HttpPost]
        public async Task<IActionResult> Remove([FromBody] LanguageViewModel model)
        {
            try
            {
                await Task.Run(() => _service.Remove(model.MapTo<Language>()));
                return Ok();
            }
            catch
            {
                return BadRequest("Error while deleting Language");
            }
        }

		protected override void Dispose(bool disposing)
      {
			_service.Dispose();
         base.Dispose(disposing);
      }

    }
}

