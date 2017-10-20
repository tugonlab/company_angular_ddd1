using Application.Interfaces;
using Application.ViewModels;
using Domain.Entities;
using Domain.Interfaces;
using Domain.Services.Interfaces;

namespace Application.Services
{
    public partial class ContactAppService : BaseAppService<Contact,ContactViewModel>, IContactAppService
    {
		IContactService _service;
        public ContactAppService(IContactService service, IUnitOfWork uow)
		:base(service, uow)
        {
			_uow = uow;
            _service = service;
        }

		public Contact Save(Contact model)
        {
            var result = model.Id > 0 ? _service.Update(model) : _service.Add(model);
            _uow.Commit();
            return result;
        }
	}
        
}
