using AutoMapper;
using System;

namespace Application.AutoMapper
{
    public static class AutoMapperExtensions
    {
        public static To MapTo<To>(this object entity)
        where To : class
        {
            return Mapper.Map<To>(entity);
        }

        public static To MapTo<To>(this object entity, Action<IMappingOperationOptions> opts)
        where To : class
        {
            return Mapper.Map<To>(entity, opts);
        }
    }
}
