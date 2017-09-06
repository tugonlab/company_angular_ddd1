using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.EF.Mappings
{
    public class ContactMap: EntityTypeConfiguration<Contact>
    {
        public override void Map(EntityTypeBuilder<Contact> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(t => t.Email).HasColumnName("EMAIL");
            builder.Property(t => t.Id).HasColumnName("ID");
            builder.Property(t => t.Message).HasColumnName("MESSAGE");
            builder.Property(t => t.Name).HasColumnName("NOME");
            builder.Property(t => t.Subject).HasColumnName("SUBJECT");
            builder.Property(t => t.PhoneNumber).HasColumnName("TELEFONE");
			builder.ToTable("TB_CONTACT");   
        }
    }
}

