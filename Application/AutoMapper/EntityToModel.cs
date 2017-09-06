using AutoMapper;
using Application.ViewModels;
using Domain.Entities;

namespace Application.AutoMapper
{
    public class EntityToModel : Profile
    {
        public EntityToModel()
        {
            CreateMap<Contact, ContactViewModel>();
        }
    }
}
