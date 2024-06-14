﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using The_Muze_Reactive.Models;

#nullable disable

namespace The_Muze_Reactive.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20240613053838_dikshad")]
    partial class dikshad
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("The_Muze_Reactive.Models.Employer", b =>
                {
                    b.Property<int>("CompId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CompId"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("companyName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CompId");

                    b.ToTable("EmployerTables");
                });

            modelBuilder.Entity("The_Muze_Reactive.Models.JobDetails", b =>
                {
                    b.Property<int>("JobDetailsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("JobDetailsId"));

                    b.Property<string>("Domain")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("EmployerId")
                        .HasColumnType("int");

                    b.Property<string>("Experience")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("JobDescription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("JobName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Package")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Vacancy")
                        .HasColumnType("int");

                    b.HasKey("JobDetailsId");

                    b.ToTable("JobDetailTables");
                });
#pragma warning restore 612, 618
        }
    }
}
