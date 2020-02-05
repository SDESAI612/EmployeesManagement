import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validator, Validators, FormGroup } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CRUDService } from 'src/app/shared/crud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {
  empData;
  id;
  updateId;
  empObj;
  apiUrl="http://localhost:3000/employeeData";  
  submitted:boolean=false;
  employee = this.fb.group({
    fullName: [''],
    emailAddress: [''],
    mobileNumber: [''],
    cityName: [''],
    dateHire: [''],
    departmentName: [''],
    gender:[''],
    employeeType:['false'] 
  });
  constructor(private fb: FormBuilder, private http: HttpClient, private emp: CRUDService,private routes: ActivatedRoute) { }

  addData()
  { 
    if(!this.id)
    this.emp.postDetails(this.employee.value).subscribe();
    else
    {  debugger
         this.http.put(`http://localhost:3000/employeeData/${this.updateId}`,this.employee.value).subscribe();
    }
    if(this.employee.invalid)
    {
      return;
    }
  }
  ngOnInit() {
    this.routes.paramMap.subscribe(params =>
      {
        const empId = +params.get('id');
        this.updateId=empId;
        if(empId)
        {
          this.getEmployee(empId);
        }
      })
  }

getEmployee(id: number)
{ debugger;
  this.id=this.routes.snapshot.params['id'];
this.http.get(this.apiUrl+'/'+id).subscribe(
    data=>{
      this.empData=data
    console.log(data);
    this.employee.setValue(
      { 
        // id: this.empData.id,
        fullName: this.empData.fullName,
        emailAddress: this.empData.emailAddress,
        mobileNumber: this.empData.mobileNumber,
        cityName: this.empData.cityName,
        gender: this.empData.gender,
          dateHire: this.empData.dateHire,
          departmentName: this.empData.departmentName,
          employeeType: this.empData.employeeType
      
        }
    )
    
  }
  ); 
  }
  resetData(){
    this.employee.reset();
  }
  
  ControlFunction()
  {
    return this.employee.controls;
  }
}

    


