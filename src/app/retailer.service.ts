import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  private baseUrl='http://localhost:1997/retailer/';

  constructor(private http:HttpClient) { }

   getRetailerList():Observable<any>
   {
     return this.http.get('${this.baseUrl}'+'retailer-list');
   }

   addRetailer(retailer: object):Observable<object>
   {
     return this.http.post('${this.baseUrl}'+'new',retailer);
   }

  

}
