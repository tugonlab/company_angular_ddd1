using Application.AutoMapper;
using Application.Services;
using AutoMapper;
using Data.UoW;
using Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace CrossCutting.IoC
{
    public class SimpleInjectorBootStrapper
    {

        public static void RegisterServices(IServiceCollection services)
        {
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddAutoMapper(typeof(MapperConfig).GetTypeInfo().Assembly);
            services.AddAppServices();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddTransient<IEmailService, EmailService>();

        }
    }
}