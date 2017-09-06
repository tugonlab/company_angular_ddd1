using Data.EF.Mappings;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace Data.EF
{
    public partial class AppDbContext : DbContext
    {

        public AppDbContext()
        {

        }

        public AppDbContext(DbContextOptions<AppDbContext> options)
      : base(options)
        {


        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            Map(modelBuilder);

            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                modelBuilder.Entity(entityType.Name).Property<DateTime>("LastModified");
                modelBuilder.Entity(entityType.Name).Ignore("IsDirty");
            }
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //Data Source=SQL5023.SmarterASP.NET;Initial Catalog=DB_9C51BF_sorrisochic;User Id=DB_9C51BF_sorrisochic_admin;Password=sorrisongr123;
            //optionsBuilder.UseSqlServer();
            optionsBuilder.UseSqlServer(
               //"Data Source=SQL5023.SmarterASP.NET;Initial Catalog=DB_9C51BF_sorrisochic;User Id=DB_9C51BF_sorrisochic_admin;Password=123mudar",
              "Data Source=.\\sqlexpress;Initial Catalog=tugon2017;Integrated Security=True",
              options => options.MaxBatchSize(30));
            optionsBuilder.EnableSensitiveDataLogging();
        }

        public override int SaveChanges()
        {
            foreach (var entry in ChangeTracker.Entries()
             .Where(e => e.State == EntityState.Added ||
                         e.State == EntityState.Modified))
            {
                entry.Property("LastModified").CurrentValue = DateTime.Now;
            }
            return base.SaveChanges();
        }
    }
}
