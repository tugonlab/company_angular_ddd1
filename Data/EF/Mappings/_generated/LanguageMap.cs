using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.EF.Mappings
{
    public class LanguageMap: EntityTypeConfiguration<Language>
    {
        public override void Map(EntityTypeBuilder<Language> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(t => t.Code).HasColumnName("CODE");
            builder.Property(t => t.Id).HasColumnName("ID");
            builder.Property(t => t.Name).HasColumnName("NAME");
			builder.ToTable("TB_LANGUAGE");   
        }
    }
}

