import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobDetails } from 'src/app/Model/JobDetails.model';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-employer-jobadding',
  templateUrl: './employer-jobadding.component.html',
  styleUrls: ['./employer-jobadding.component.css']
})
export class EmployerJobaddingComponent implements OnInit {

  addJob: JobDetails = {
    jobDetailsId:0,
    jobName: "",
    vacancy: 0, // New field
    domain: "",
    experience: "",
    package: "",
    location: "",
    jobDescription: "",
    isActive: true,
    employerId: 0 // Will be set from local storage
  };

  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
    const employerUser = localStorage.getItem('EmployerUser');
    if (employerUser != null) {
      const employer = JSON.parse(employerUser);
      this.addJob.employerId = employer.compId; // Correct assignment
    }
  }

  onAddingJob() {
    this.jobService.addjob(this.addJob).subscribe({
      next: (response) => {
        console.log('Job added successfully', response);
        this.router.navigate(['/employerhome']);
      },
      error: (err) => {
        console.error('Job addition failed', err);
        alert('Job addition failed. Please try again.');
      }
    });
  }
}