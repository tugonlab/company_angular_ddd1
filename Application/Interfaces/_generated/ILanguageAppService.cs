using Application.ViewModels;
using Domain.Entities;

namespace Application.Interfaces
{
    public partial interface ILanguageAppService : IBaseAppService<Language, LanguageViewModel>
    {
		Language Save(Language viewModel);
    }
}

