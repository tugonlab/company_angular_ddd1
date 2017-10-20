using Application.AutoMapper;
using Application.Interfaces;
using Application.ViewModels;
using CrossCutting.Services;
using Domain.Entities;
using Domain.Interfaces;
using Domain.Services.Interfaces;
using System.Linq;

namespace Application.Services
{
    public partial class ContactAppService
    {
		/*
        public ContactAppService(IContactService service, IUnitOfWork uow)
		:base(service, uow)
        {
			_uow = uow            _service = service;
        }
		*/

        private readonly IEmailService _emailService;

        public ContactAppService(IContactService service, IUnitOfWork uow, IEmailService emailService)
        : base(service, uow)
        {
			_uow = uow;
            _service = service;
            _emailService = emailService;
        }


        public void SendEmail(ContactViewModel contactModel)
        {
            try
            {
                var contact = contactModel.MapTo<Contact>();
                _emailService.SendEmail(contact.Email, "adilson@almeidapedro.com.br", contact.Subject, $"{contact.Name}<br />{contact.Message}");
                //_service.SendEmail(contact);
            }
            catch (System.Exception e)
            {

                throw e;
            }
        }
	}
        
}
