import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
id: number =null;
apiUrl: string = "http://localhost:3000/employeeData"

  constructor(private http: HttpClient) { }


  /**
   * This is used for getting data
   */
    GetDetails()
    {
      return this.http.get(this.apiUrl)
    }

    /**
     * This will delete the record of a particular employee
     * @param id 
     */
    DeleteDetails(id:number)
    {
        debugger;
        this.id = id;
        return this.http.delete(this.apiUrl+'/'+this.id);
    }
    
    /**
     * This will the send the form group to json file
     * @param emp This will take the form group 
     */
    postDetails(emp)
    {
      return this.http.post(this.apiUrl,emp)
    }
}
