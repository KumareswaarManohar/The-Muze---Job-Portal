import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-seekerregister',
  templateUrl: './seekerregister.component.html',
  styleUrls: ['./seekerregister.component.css']
})
export class SeekerregisterComponent implements OnInit {
  userRegister:any={
    jobSeekerId: 0,
    fullName: "",
    email: "",
    password: "",
    skills: "",
    yearsOfExperience: 0
  };
  constructor(private userService:JobService,private router:Router) { }


  ngOnInit(): void {
  }
  onUserRegister() {
    this.userService.userRegister(this.userRegister).subscribe({
      next:(response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/seekerlogin']);
      },
      error:(err) => {
        console.error('Registration failed', err);
        alert('Registration failed. Please try again.');
      }
  });
  }



}
