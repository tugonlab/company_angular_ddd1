﻿using Application.Interfaces;
using Application.Services;
using Data.Repositories;
using Domain.Interfaces;
using Domain.Services;
using Domain.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace CrossCutting.IoC
{
    public static class IoCGenerated
    {
        public static void AddAppServices(this IServiceCollection services)
        {
		services.AddTransient<IContactAppService, ContactAppService>();
		services.AddTransient<IContactRepository, ContactRepository>();
		services.AddTransient<IContactService, ContactService>();

		services.AddTransient<ILanguageAppService, LanguageAppService>();
		services.AddTransient<ILanguageRepository, LanguageRepository>();
		services.AddTransient<ILanguageService, LanguageService>();

        }
    }
}
