using System.ComponentModel.DataAnnotations;

namespace The_Muze_Reactive.Models
{
    public class Employer
    {
        [Key]
        public int CompId { get; set; }
        public string companyName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
