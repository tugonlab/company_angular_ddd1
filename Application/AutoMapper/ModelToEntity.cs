using AutoMapper;
using Application.ViewModels;
using Domain.Entities;

namespace Application.AutoMapper
{
    public class ModelToEntity : Profile
    {
        public ModelToEntity()
        {
            CreateMap<ContactViewModel, Contact>();
        }
    }
}
