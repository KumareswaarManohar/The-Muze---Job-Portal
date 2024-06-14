import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emp } from 'src/app/Model/Emp.model';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-employer-registration',
  templateUrl: './employer-registration.component.html',
  styleUrls: ['./employer-registration.component.css']
})
export class EmployerRegistrationComponent implements OnInit {

  emp: Emp = {
    employerId: 0,
    CompanyName: '',
    email: '',
    password: ''    
  };

  constructor(private employerService: JobService, private router: Router) {}
  ngOnInit(): void {

  }

  onRegister() {
    this.employerService.registerEmployer(this.emp).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed', err);
        alert('Registration failed. Please try again.');
      }
    });
  }
}
