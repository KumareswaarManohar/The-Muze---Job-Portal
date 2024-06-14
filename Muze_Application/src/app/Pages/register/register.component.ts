import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employer } from 'src/app/Model/Employer.model';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  register: any = {
    compId: 0,
    CompanyName: "",
    email: "",
    password: ""  
  };
 
  constructor(private userService:JobService,private router:Router) { }  

  onRegister() {
    this.userService.register(this.register).subscribe({
      next:(response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
      },
      error:(err) => {
        console.error('Registration failed', err);
        alert('Registration failed. Please try again.');
      }
  });
  }

}

 
  

  


