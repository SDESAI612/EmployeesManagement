import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { FetchDetailsComponent } from './employee/fetch-details/fetch-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [FetchDetailsComponent]
})
export class AppModule { }
