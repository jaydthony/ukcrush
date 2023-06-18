using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Model.Enitities;

namespace Data.Context
{
    public class DatingSiteContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Timers> Timers { get; set; }
        public DbSet<Payments> Payments { get; set; }
        public DatingSiteContext(DbContextOptions options) : base(options) {}
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            SeedRoles(builder);
        }
        public static void SeedRoles(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<IdentityRole>().HasData(
                new IdentityRole() { Name = "ADMIN", ConcurrencyStamp = "1", NormalizedName = "ADMIN" },
                new IdentityRole() { Name = "USER", ConcurrencyStamp = "2", NormalizedName = "USER" },
            new IdentityRole() { Name = "CAMGIRL", ConcurrencyStamp = "3", NormalizedName = "CAMGIRL" });
        }
    }
}
