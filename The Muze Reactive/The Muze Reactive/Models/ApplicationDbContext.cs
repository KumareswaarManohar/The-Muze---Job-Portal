using Microsoft.EntityFrameworkCore;

namespace The_Muze_Reactive.Models
{

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Employer> EmployerTable { get; set; }
        public DbSet<JobDetails> JobDetailTable { get; set; }
        public DbSet<JobSeeker> JobSeekersTable { get; set; }
        public DbSet<JobApplication> JobApplicationsTable { get; set; }
    }
}
