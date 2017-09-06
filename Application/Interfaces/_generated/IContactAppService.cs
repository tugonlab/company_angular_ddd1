using Application.ViewModels;
using Domain.Entities;

namespace Application.Interfaces
{
    public partial interface IContactAppService : IBaseAppService<Contact, ContactViewModel>
    {
		Contact Save(Contact viewModel);
    }
}

