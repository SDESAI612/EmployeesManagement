import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CRUDService } from 'src/app/shared/crud.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'


@Component({
  selector: 'app-fetch-details',
  templateUrl: './fetch-details.component.html',
  styleUrls: ['./fetch-details.component.scss']
})
export class FetchDetailsComponent implements OnInit {
 private employeeObject: object;
 public searchEmployee; 
 reverse=false
 constructor(private http: HttpClient, private emp :CRUDService,
    private router: Router) {}

  ngOnInit() {
    this.GetData();
  }

  
  GetData()
    {   debugger;
        this.emp.GetDetails().subscribe(data=>
          {  
              this.employeeObject = data;
          }
        )
    }
  DeleteData(id:number)
  { 
      debugger;
      this.emp.DeleteDetails(id).subscribe(
        data=>{
          this.GetData();
        }
      )
  }
  editData(id:number)
  {
      this.router.navigate(['/edit',id]);
  }
  toggleUp()
  {
    this.reverse=true
  }
  toggleDown()
  {
    this.reverse=false
  }
}
