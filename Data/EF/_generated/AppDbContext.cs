using Data.EF.Mappings;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Data.EF
{
    public partial class AppDbContext
    {
        public DbSet<Contact> Contacts { get; set; }

		private static void Map(ModelBuilder modelBuilder)
        {
            modelBuilder.AddConfiguration(new ContactMap());
        }
	}
}
