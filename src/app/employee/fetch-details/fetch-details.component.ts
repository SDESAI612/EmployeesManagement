import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CRUDService } from 'src/app/shared/crud.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-fetch-details',
  templateUrl: './fetch-details.component.html',
  styleUrls: ['./fetch-details.component.scss']
})
export class FetchDetailsComponent implements OnInit {
 private employeeObject: object;
 public searchEmployee; 
 reverse=false;

 constructor(private http: HttpClient, private emp :CRUDService,
    private router: Router) {}

  ngOnInit() {
    this.GetData();
  }

  /**
   * This function will get all the record from json
   */
  GetData()
    {   debugger;
        this.emp.GetDetails().subscribe(data=>
          {  
              this.employeeObject = data;
          }
        )
    }

  /**
   * This function will delete the particular record from the database
   * @param id This is will send the id that need to be deleted
   */  
  DeleteData(id:number)
  { 
      debugger;
      this.emp.DeleteDetails(id).subscribe(
        data=>{
          this.GetData();
        }
      )
  }

  /**
   * This function will send the id to URL and component will be called according to Id
   * @param id 
   */
  editData(id:number)
  {
      this.router.navigate(['/edit',id]);
  }

  /**
   * This function will sort name in desending order
   */

  toggleUp()
  {
    this.reverse=true
  }
  
  /**
   * This function will Sort name in ascending order
   */
  toggleDown()
  {
    this.reverse=false
  }
}
