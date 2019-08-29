import { Injectable, OnDestroy } from '@angular/core';

import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {Subscription} from 'rxjs';
export const headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");
@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnDestroy {
  status:string;
  response:any;
  obsObj:Subscription;
  customers:Customer[];
  constructor(public http: HttpClient) { }
  Getcustomers(){
    const params = new HttpParams();
    this.obsObj=this.http.get<Customer[]>("http://localhost:3000/customers",{headers,params})
    .subscribe(
        data => { console.log("Get Request is successful by array ", data);this.customers=data;this.status = "Get Request is successful by array";},
        error => {console.log("Error", error);this.status = "Error";});
  }
  PostCall(pDnumber,pPin,pAnumber,pEmail,pDob,count,pPassword){
    this.http.post("http://localhost:3000/Users",
        {
	 "ATM/Debit Card Number":pDnumber,
	 "Card PIN":pPin,
	 "Aadhar Card Number": pAnumber,
      "Email Address": pEmail,
   "Date of Birth":pDob,
   "id": count,
   "password":pPassword

        })
        .subscribe(
            data => {console.log("POST Request is successful ", data);this.status = "POST Request is successful";},
            error => {console.log("Error", error);this.status = "Error";});
  }  
  
  ngOnDestroy()
  {
    this.obsObj.unsubscribe();
  }
}
class Customer{
  name: string;
  id : number;
}
