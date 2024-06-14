using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace The_Muze_Reactive.Migrations
{
    /// <inheritdoc />
    public partial class Shaddik : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_JobDetailTables",
                table: "JobDetailTables");

            migrationBuilder.DropPrimaryKey(
                name: "PK_EmployerTables",
                table: "EmployerTables");

            migrationBuilder.RenameTable(
                name: "JobDetailTables",
                newName: "JobDetailTable");

            migrationBuilder.RenameTable(
                name: "EmployerTables",
                newName: "EmployerTable");

            migrationBuilder.AddPrimaryKey(
                name: "PK_JobDetailTable",
                table: "JobDetailTable",
                column: "JobDetailsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_EmployerTable",
                table: "EmployerTable",
                column: "CompId");

            migrationBuilder.CreateTable(
                name: "JobSeekersTable",
                columns: table => new
                {
                    JobSeekerId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Skills = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    YearsOfExperience = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobSeekersTable", x => x.JobSeekerId);
                });

            migrationBuilder.CreateTable(
                name: "JobApplicationsTable",
                columns: table => new
                {
                    JobApplicationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    JobDetailsId = table.Column<int>(type: "int", nullable: false),
                    JobSeekerId = table.Column<int>(type: "int", nullable: false),
                    ApplicationDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobApplicationsTable", x => x.JobApplicationId);
                    table.ForeignKey(
                        name: "FK_JobApplicationsTable_JobDetailTable_JobDetailsId",
                        column: x => x.JobDetailsId,
                        principalTable: "JobDetailTable",
                        principalColumn: "JobDetailsId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_JobApplicationsTable_JobSeekersTable_JobSeekerId",
                        column: x => x.JobSeekerId,
                        principalTable: "JobSeekersTable",
                        principalColumn: "JobSeekerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_JobApplicationsTable_JobDetailsId",
                table: "JobApplicationsTable",
                column: "JobDetailsId");

            migrationBuilder.CreateIndex(
                name: "IX_JobApplicationsTable_JobSeekerId",
                table: "JobApplicationsTable",
                column: "JobSeekerId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JobApplicationsTable");

            migrationBuilder.DropTable(
                name: "JobSeekersTable");

            migrationBuilder.DropPrimaryKey(
                name: "PK_JobDetailTable",
                table: "JobDetailTable");

            migrationBuilder.DropPrimaryKey(
                name: "PK_EmployerTable",
                table: "EmployerTable");

            migrationBuilder.RenameTable(
                name: "JobDetailTable",
                newName: "JobDetailTables");

            migrationBuilder.RenameTable(
                name: "EmployerTable",
                newName: "EmployerTables");

            migrationBuilder.AddPrimaryKey(
                name: "PK_JobDetailTables",
                table: "JobDetailTables",
                column: "JobDetailsId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_EmployerTables",
                table: "EmployerTables",
                column: "CompId");
        }
    }
}
