import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Empdet: any[] = [];

  user: any = {
    email: "",
    password: "" 
  };

  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.jobService.login(this.user.email, this.user.password).subscribe({
      next: (res) => {
        this.Empdet = res;
        console.log(this.Empdet);

        // Assuming res is an array of employers and we're checking if the provided email and password match any
        const authenticatedEmployer = this.Empdet.find(emp => this.user.email === emp.email && this.user.password === emp.password);

        if (authenticatedEmployer) {
          alert("Login Successful");
          localStorage.setItem('EmployerUser', JSON.stringify(authenticatedEmployer));
          this.router.navigate(['/employerhome']);
        } else {
          alert("Invalid email or password");
        }
      },
      error: (err) => {
        console.log(err);
        alert("An error occurred during login");
      }
    });
  }
}
