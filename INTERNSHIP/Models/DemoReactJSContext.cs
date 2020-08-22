using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace INTERNSHIP.Models
{
    public partial class DemoReactJSContext : DbContext
    {

        public DemoReactJSContext(DbContextOptions<DemoReactJSContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Internship> Internship { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Internship>(entity =>
            {
                entity.ToTable("INTERNSHIP");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Mota).HasColumnName("MOTA");

                entity.Property(e => e.Name)
                    .HasColumnName("NAME")
                    .HasMaxLength(500);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
