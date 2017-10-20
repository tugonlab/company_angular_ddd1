
using Application.ViewModels;
namespace Application.Interfaces
{
    public partial interface IContactAppService 
    {
        void SendEmail(ContactViewModel contactModel);
    }
}

