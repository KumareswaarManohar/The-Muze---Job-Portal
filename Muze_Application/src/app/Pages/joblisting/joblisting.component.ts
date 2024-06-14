import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobDetails } from 'src/app/Model/JobDetails.model';
import { JobSeeker } from 'src/app/Model/JobSeeker.model';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.component.html',
  styleUrls: ['./joblisting.component.css']
})
export class JoblistingComponent implements OnInit {

  det: JobDetails[] = [];
  selectedJob:any={}

  ApplyMet: any = {
    jobApplicationId: 0,
    jobDetailsId: 0,
    jobSeekerId: 0,
    applicationDate: new Date(),
  };

  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    this.FetchDet();
    const jobSeekerUser = localStorage.getItem('JobSeekerUser');
      if (jobSeekerUser) {
        const jobSeeker = JSON.parse(jobSeekerUser);
        this.ApplyMet.jobSeekerId = jobSeeker.jobSeekerId;
        
      }
      this.ApplyMet.jobDetailsId = this.selectedJob.jobDetailsId;
      this.ApplyMet.applicationDate = new Date();

  }

  FetchDet() {
    this.jobService.GetAllJobs().subscribe({
      next: (response) => {
        this.det = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  selectJob(job: JobDetails) {
    this.selectedJob = job;
  }

  ApplyMethod() {
    if (this.selectedJob) {
      
    

      this.jobService.applyForJob(this.ApplyMet).subscribe({
        next: (response) => {
          alert("Applied Successfully!!");
        },
        error: (err) => {
          console.error('Application failed', err);
          alert('Application failed. Please try again.');
        }
      });
    } else {
      alert('Please select a job to apply');
    }
  }
}
