import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './Pages/landing/landing.component';
import { JoblistingComponent } from './Pages/joblisting/joblisting.component';
import { LandingregistrationComponent } from './Pages/landingregistration/landingregistration.component';
import { SeekerloginComponent } from './Pages/seekerlogin/seekerlogin.component';
import { SeekerregisterComponent } from './Pages/seekerregister/seekerregister.component';
import { EmployerHomeComponent } from './Pages/employer-home/employer-home.component';
import { EmployerJobaddingComponent } from './Pages/employer-jobadding/employer-jobadding.component';
import { JobdescriptionComponent } from './Pages/jobdescription/jobdescription.component';
import { EmployerRegistrationComponent } from './Pages/employer-registration/employer-registration.component';
import { JobSeekerAppliedJobsComponent } from './Pages/jobseeker-applied-jobs/jobseeker-applied-jobs.component';
import { CompaniesComponent } from './Pages/companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    JoblistingComponent,
    LandingregistrationComponent,
    SeekerloginComponent,
    SeekerregisterComponent,
    EmployerHomeComponent,
    EmployerJobaddingComponent,
    JobdescriptionComponent,
    EmployerRegistrationComponent,
    JobSeekerAppliedJobsComponent,
    CompaniesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
