import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { FetchDetailsComponent } from './fetch-details/fetch-details.component';


const routes: Routes = [
  {path:'Registration',
    component:EmployeeRegistrationComponent  
},
{
  path:'Fetch',
  component: FetchDetailsComponent
},
{
  path:'edit/:id',
  component : EmployeeRegistrationComponent
},
{
  path:'#',
  component: FetchDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
