import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User.model';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-seekerlogin',
  templateUrl: './seekerlogin.component.html',
  styleUrls: ['./seekerlogin.component.css']
})
export class SeekerloginComponent implements OnInit {
userlog:User[]=[]
  constructor(private jobService:JobService,private router:Router) { }

  ngOnInit(): void {
  }
  userLogin:any={
    jobSeekerId: 0,
    fullName: "",
    email: "",
    password: "",
    skills: "",
    yearsOfExperience: 0
  };

  onULogin(form: any) {
    this.jobService.Userlogin().subscribe({
      next: (res) => {
        this.userlog = res;
        for (let user of this.userlog) {
          if (form.value.email === user.email && form.value.fullName === user.password) {
            alert("Login Successful!!");
            this.router.navigate(['/joblisting']);
            return;
          }
        }
        alert("Invalid credentials. Please try again.");
      },
      error: (err) => {
        console.error(err);
        alert('Failed to login. Please try again.');
      }
    });
  }
}