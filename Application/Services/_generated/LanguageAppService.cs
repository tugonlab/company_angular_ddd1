using Application.Interfaces;
using Application.ViewModels;
using Domain.Entities;
using Domain.Interfaces;
using Domain.Services.Interfaces;

namespace Application.Services
{
    public partial class LanguageAppService : BaseAppService<Language,LanguageViewModel>, ILanguageAppService
    {
		ILanguageService _service;
        public LanguageAppService(ILanguageService service, IUnitOfWork uow)
		:base(service, uow)
        {
			_uow = uow;
            _service = service;
        }

		public Language Save(Language model)
        {
            var result = model.Id > 0 ? _service.Update(model) : _service.Add(model);
            _uow.Commit();
            return result;
        }
	}
        
}
