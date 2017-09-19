using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Data.EF;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using System;
using System.Windows.Input;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using api.Helpers.Upload;
using CrossCutting.IoC;
using System.Reflection;
using AutoMapper;

namespace api
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
            
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)

        {
            services.AddCors();

            services.AddAuthorization(options =>
            {
                options.AddPolicy("Authenticated", policy => policy.RequireAuthenticatedUser());
            });
            // Add framework services.
            services.AddMvc(options =>
            {
                options.Conventions.Add(new CommandParameterBindingConvention());
            }).AddJsonOptions(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling =
                                           Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            });

            services.AddAutoMapper(typeof(Startup).GetTypeInfo().Assembly);

            var connectionString = Configuration.GetConnectionString("AppDbConnection");
            Console.WriteLine(connectionString);
            services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connectionString));
            
            RegisterServices(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<AppDbContext>();
                context.Database.Migrate();
            }

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseCors(builder => builder.WithOrigins("http://localhost:52101").AllowAnyHeader().AllowAnyMethod());

            app.UseMvc();
        }

        private static void RegisterServices(IServiceCollection services)
        {
            services.AddTransient<IUploadHelper, UploadHelper>();
            SimpleInjectorBootStrapper.RegisterServices(services);
        }
    }

    public class CommandParameterBindingConvention : IActionModelConvention
    {
        public void Apply(ActionModel action)
        {
            if (action == null)
            {
                throw new ArgumentNullException(nameof(action));
            }

            foreach (var parameter in action.Parameters)
            {
                if (typeof(ICommand).IsAssignableFrom((parameter.ParameterInfo.ParameterType)))
                {
                    parameter.BindingInfo = parameter.BindingInfo ?? new BindingInfo();
                    parameter.BindingInfo.BindingSource = BindingSource.Body;
                }
            }
        }
    }
}
