using AutoMapper;

namespace Application.AutoMapper
{
    public class MapperConfig
    {
            public static void Register()
            {
                Mapper.Initialize(cfg => cfg.AddProfile<EntityToModel>());
                Mapper.Initialize(cfg => cfg.AddProfile<ModelToEntity>());
            }
    }
}
