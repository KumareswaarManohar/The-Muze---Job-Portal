namespace The_Muze_Reactive.Models
{
    public class JobDetails
    {
        public int JobDetailsId { get; set; }
        public string JobName { get; set; }
        public int Vacancy { get; set; }
        public string Domain { get; set; }
        public string Experience { get; set; }
        public string Package { get; set; }
        public string Location { get; set; }
        public string JobDescription { get; set; }
        public bool IsActive { get; set; }
        public int EmployerId { get; set; }
        
    }
}
