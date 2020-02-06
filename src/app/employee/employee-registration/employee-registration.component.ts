import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import {  HttpClient } from '@angular/common/http';
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

/**
 * This is the form group named employee
 */
  employee = this.fb.group({
    fullName: ['',[Validators.required]],
    emailAddress: ['',[Validators.required]],
    mobileNumber: ['',[Validators.required]],
    cityName: ['',[Validators.required]],
    dateHire: ['',[Validators.required]],
    departmentName: ['',[Validators.required]],
    gender:['',[Validators.required]],
    employeeType:['false'] 
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private emp: CRUDService,private routes: ActivatedRoute) { }

  /**  
   * This is for adding new data or updating data
   */
  addData()
  { 
    if(!this.id&& this.employee.valid)
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

/**
 * This function is for setting value to the form filled from json file
 * @param id This will get the id value from json and send to URL  
 */  
getEmployee(id: number)
{ debugger;
  this.id=this.routes.snapshot.params['id'];
this.http.get(this.apiUrl+'/'+id).subscribe(
    data=>{
      this.empData=data
    console.log(data);
    this.employee.setValue(
      { 
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

  /** 
   * This will reset whole form values
   */
  resetData(){
    this.employee.reset();
  }
  
  /**
   * This is used for getting form control in HTML
   */
  get f()
  {
    return this.employee.controls;
  }
}

    


