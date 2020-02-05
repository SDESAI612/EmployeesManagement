import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
id: number =null;
apiUrl: string = "http://localhost:3000/employeeData"
  constructor(private http: HttpClient) { }

    GetDetails()
    {
      return this.http.get(this.apiUrl)
    }

    DeleteDetails(id:number)
    {
        debugger;
        this.id = id;
        return this.http.delete(this.apiUrl+'/'+this.id);
    }
    postDetails(emp)
    {
      return this.http.post(this.apiUrl,emp)
    }
    // updateDetails(apiUrl,emp)
    // {
    //   return this.http.put(this.apiUrl,this.id);
    // }
}
