namespace The_Muze_Reactive.Models
{
    public class JobApplication
    {

        public int JobApplicationId { get; set; }
        public int JobDetailsId { get; set; }
        public JobDetails JobDetails { get; set; }
        public int JobSeekerId { get; set; }
        public JobSeeker JobSeeker { get; set; }
        public DateTime ApplicationDate { get; set; }
    }
}
