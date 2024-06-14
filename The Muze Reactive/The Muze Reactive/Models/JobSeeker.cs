using System.ComponentModel.DataAnnotations;

namespace The_Muze_Reactive.Models
{
    public class JobSeeker
    {
        [Key]
        public int JobSeekerId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Skills { get; set; }
        public int YearsOfExperience { get; set; }
    }
}
