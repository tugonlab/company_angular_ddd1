using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Data.Migrations
{
    public partial class language : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TELEFONE",
                table: "TB_CONTACT",
                newName: "PHONE_NUMBER");

            migrationBuilder.RenameColumn(
                name: "NOME",
                table: "TB_CONTACT",
                newName: "NAME");

            migrationBuilder.CreateTable(
                name: "TB_LANGUAGE",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CODE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastModified = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NAME = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TB_LANGUAGE", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TB_LANGUAGE");

            migrationBuilder.RenameColumn(
                name: "PHONE_NUMBER",
                table: "TB_CONTACT",
                newName: "TELEFONE");

            migrationBuilder.RenameColumn(
                name: "NAME",
                table: "TB_CONTACT",
                newName: "NOME");
        }
    }
}
