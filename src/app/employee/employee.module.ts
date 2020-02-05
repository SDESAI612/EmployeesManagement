import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { EmployeeRoutingModule } from './employee-routing.module';
import { FetchDetailsComponent } from './fetch-details/fetch-details.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FetchDetailsComponent, EmployeeRegistrationComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
     
  ],
  exports:[
    FetchDetailsComponent,
    EmployeeRegistrationComponent
  ]
})
export class EmployeeModule { }
