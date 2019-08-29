import { Injectable,OnDestroy } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {Subscription} from 'rxjs';
import { Observable} from 'rxjs';
export const headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");
@Injectable({
  providedIn: 'root'
})
export class FundTransferService implements OnDestroy {
  status:string;
  response:any;
  obsObj:Subscription;
  account:Account[];
  person : Account;
  constructor(public http: HttpClient) { }

  GetAccountDetails():Observable <any>{
    console.log("acc");
    const params = new HttpParams();
    return this.http.get<Account[]>("http://localhost:3000/details",{headers,params});
  }

  // PutBalance(){
  //   console.log("Put method");
  //   this.person = {"accnum" : "1234","name" : "Anya","balance" : "30000"};
  //    return this.http.put("http://localhost:8009/api/update",this.person);
  // }

  PutBalance():Observable<any>{
    return this.http.put("http://localhost:3000/details", {
      "id" : "2",
      "accnum" : "1234",
      "name" : "Anya",
      "balance" : "25000"
     });
    //  .subscribe (
    //    data => {console.log("POST req success",data);
    //     this.status = "POST req success";},
    //    error => {console.log("Error",error);
    //     this.status = "Error";}
    //  );
  }
  
  ngOnDestroy()
  {
    this.obsObj.unsubscribe();
  }
}
class Account{
  accnum : string;
  name : string;
  balance : string;
}




  