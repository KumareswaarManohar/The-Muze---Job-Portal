import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { JoblistingComponent } from './Pages/joblisting/joblisting.component';
import { LandingregistrationComponent } from './Pages/landingregistration/landingregistration.component';
import { EmployerJobaddingComponent } from './Pages/employer-jobadding/employer-jobadding.component';
import { EmployerHomeComponent } from './Pages/employer-home/employer-home.component';
import { SeekerregisterComponent } from './Pages/seekerregister/seekerregister.component';
import { SeekerloginComponent } from './Pages/seekerlogin/seekerlogin.component';
import { JobdescriptionComponent } from './Pages/jobdescription/jobdescription.component';
import { EmployerRegistrationComponent } from './Pages/employer-registration/employer-registration.component';
import { JobSeekerAppliedJobsComponent } from './Pages/jobseeker-applied-jobs/jobseeker-applied-jobs.component';
import { CompaniesComponent } from './Pages/companies/companies.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'landing',
    component:LandingComponent
  },
  {
    path:'landingregistration',
    component:LandingregistrationComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'joblisting',
    component:JoblistingComponent
  },
  {
    path:'jobadding',
    component:EmployerJobaddingComponent
  },
  {
    path:'employerhome',
    component:EmployerHomeComponent
  },
  {
    path:'seekerregister',
    component:SeekerregisterComponent
  },
  {
    path:'seekerlogin',
    component:SeekerloginComponent
  },{
    path:'jobdescription',
    component:JobdescriptionComponent
  },
  {
    path:'employerregistration',
    component:EmployerRegistrationComponent
  },
  {
   path:'jobseekerappliedjobs',
   component:JobSeekerAppliedJobsComponent
  },
  {
    path:'companies',
    component:CompaniesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
