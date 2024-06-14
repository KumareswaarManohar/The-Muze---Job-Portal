import { Component, OnInit } from '@angular/core';
import { JobApplication } from 'src/app/Model/JobApplication.model';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-jobseeker-applied-jobs',
  templateUrl: './jobseeker-applied-jobs.component.html',
  styleUrls: ['./jobseeker-applied-jobs.component.css']
})
export class JobSeekerAppliedJobsComponent implements OnInit {
  applications: JobApplication[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    const jobSeekerUser = localStorage.getItem('JobSeekerUser');
    if (jobSeekerUser != null) {
      const jobSeeker = JSON.parse(jobSeekerUser);
      const jobSeekerId = jobSeeker.jobSeekerId;
      this.jobService.getJobApplicationsByJobSeeker(jobSeekerId).subscribe({
        next: (response) => {
          this.applications = response;
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
