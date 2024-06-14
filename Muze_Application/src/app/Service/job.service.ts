import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employer } from '../Model/Employer.model';
import { JobDetails } from '../Model/JobDetails.model';
import { User } from '../Model/User.model';
import { Applied } from '../Model/Applied.model';
import { Emp } from '../Model/Emp.model';
import { JobApplication } from '../Model/JobApplication.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  baseApiUrl:string = environment.baseApiUrl

  constructor(private http :  HttpClient ) { }
  // https://localhost:7259/api/EmployerLogins

 


  register(obj: Employer): Observable<Employer> {
    return this.http.post<Employer>('https://localhost:7070/api/Employers', obj);
  }

  login(email:string,password:string):Observable<Employer[]>{
    return this.http.get<Employer[]>('https://localhost:7070/api/Employers  ');
  }
 
  addjob(obj:JobDetails): Observable<JobDetails> {
    return this.http.post<JobDetails>('https://localhost:7070/api/JobDetails', obj);
  }
  
 
  GetAllJobs():Observable<any>{
    return this.http.get<any>('https://localhost:7070/api/JobDetails');
  }

  
  
  
  AppliedJob(jac:Applied):Observable<Applied>{
    return this.http.post<Applied>('https://localhost:7070/api/JobApplications',jac);
  }

//sumaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// addJob(job: JobDetails): Observable<any> {
//   return this.http.post(`${this.baseUrl}/jobs`, job);
// }

// getJobsByEmployer(employerId: number): Observable<JobDetails[]> {
//   return this.http.get<JobDetails[]>(`${this.baseUrl}/jobs/employer/${employerId}`);
// }

// deleteJob(jobId: number): Observable<any> {
//   return this.http.delete(`${this.baseUrl}/jobs/${jobId}`);
// }

//Employer
registerEmployer(emp: Emp): Observable<any> {
  return this.http.post('https://localhost:7070/api/Employers', emp);
}

 
//User
userRegister(ob:User):Observable<User>{
  return this.http.post<User>('https://localhost:7070/api/JobSeekers',ob);
}

Userlogin():Observable<User[]>{
  return this.http.get<User[]>('https://localhost:7070/api/JobSeekers');
}

 
//Employer Job Adding
addjobs(obj:JobDetails): Observable<JobDetails> {
  return this.http.post<JobDetails>('https://localhost:7070/api/JobDetails', obj);
}


private apiUrl = 'https://localhost:7070/api/JobDetails';

// 
getJobsByEmployer(employerId: number): Observable<JobDetails[]> {
  return this.http.get<any>(`${this.apiUrl}/Employer/${employerId}`);
}

deleteJob(jobId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${jobId}`);
}

//newely added

applyForJob(application: JobApplication): Observable<JobApplication> {
  return this.http.post<JobApplication>('https://localhost:7070/api/JobApplications', application);
}

getJobApplicationsByEmployer(employerId: number): Observable<JobApplication[]> {
  return this.http.get<JobApplication[]>(`${this.apiUrl}/JobApplications/byEmployer/${employerId}`);
}

getJobApplicationsByJobSeeker(jobSeekerId: number): Observable<JobApplication[]> {
  return this.http.get<JobApplication[]>(`${this.apiUrl}/JobApplications/byJobSeeker/${jobSeekerId}`);
}

getApplicationsByEmployer(employerId: number): Observable<JobApplication[]> {
  return this.http.get<JobApplication[]>(`${this.apiUrl}/applications/employer/${employerId}`);
}

applyJob(application: JobApplication): Observable<JobApplication> {
  return this.http.post<JobApplication>('https://localhost:7070/api/JobApplications', application);
}
}
