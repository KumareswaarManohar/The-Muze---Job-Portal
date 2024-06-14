import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobDetails } from 'src/app/Model/JobDetails.model';
import { JobService } from 'src/app/Service/job.service';
import { JobApplication } from 'src/app/Model/JobApplication.model';

@Component({
  selector: 'app-employer-home',
  templateUrl: './employer-home.component.html',
  styleUrls: ['./employer-home.component.css']
})
export class EmployerHomeComponent implements OnInit {

  det: JobDetails[] = [];
  applications: JobApplication[] = [];

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit(): void {
    const employerUser = localStorage.getItem('EmployerUser');
    if (employerUser != null) {
      const employer = JSON.parse(employerUser);
      const compId = employer.compId;
      this.fetchDet(compId);
      this.fetchApplications(compId); // Fetch applications for the employer
    }
  }

  fetchDet(compId: number): void {
    this.jobService.getJobsByEmployer(compId).subscribe({
      next: (response) => {
        this.det = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteJob(jobId: number): void {
    this.jobService.deleteJob(jobId).subscribe({
      next: () => {
        this.det = this.det.filter(job => job.jobDetailsId !== jobId);
        console.log(`Job with ID ${jobId} deleted successfully`);
      },
      error: (err) => {
        console.log(err);
        alert('Failed to delete job');
      }
    });
  }

  fetchApplications(compId: number): void {
    this.jobService.getApplicationsByEmployer(compId).subscribe({
      next: (response) => {
        this.applications = response;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getCompIdLocalStorage() {
    const employerUser = localStorage.getItem('EmployerUser');
    if (employerUser) {
      const employer = JSON.parse(employerUser);
      return employer.compId;
    }
  }
}
