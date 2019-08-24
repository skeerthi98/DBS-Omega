import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subscription } from 'rxjs';
export const headers=new HttpHeaders().set("Access-Control-Allow-Origin","*");
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(public http:HttpClient) { }
  Username:string;
  Email:string;
  Password:string;
  Rpassword:string;
  Registerstatus:string;
  Fa:boolean;obsObj:Subscription;
  response:any;
  status:string;
Register(pUsername:string,pEmail:string,pPassword:string,pRpassword:string)
{
  let regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
  if((pUsername.length)>=6 && regex.test(pEmail) && pPassword==pRpassword)
  {
this.Registerstatus="Registration Successful";
this.Fa=true;
  }  
  else    {
    this.Fa=false;
    if((pUsername.length)<6)
    {
      this.Registerstatus="Registration Unsuccessful due to length of user name. Please enter more than 5 characters ";
    }
    if(regex.test(pEmail))
    {
      this.Registerstatus="Registration Unsuccessful due to invalid email. Please enter a valid mail ";
    }
    if(pPassword==pRpassword)
    {
      this.Registerstatus="Registration Unsuccessful due to incorrect password entries. Password and Repeat passwords should be equal ";
    }  
  }
}
ngOnInit() { 
  // this.getObservable();
  // this.postCustomers();
  this.getCustomers();
  this.getPut();
  this.DeleteCall();
  this.getCustomers();
}
getThroughTypicode()
  {
    this.http.get("http://jsonplaceholder.typicode.com/posts").toPromise()
    .then((data)=>{console.log(data);})
    .catch((error)=>{console.error("404:",error)}),
    ((error)=>{console.log(error);});
  }
  getCustomers()
  {
    this.http.get("http://localhost:3000/customers").toPromise()
    .then((data)=>{this.response=data})
    .catch((error)=>{console.error("404:",error)}),
    ((error)=>{console.log(error);});
  }
  getPut()
  {
    this.http.put("http://localhost:3000/customers/1",
    {
        "name":"Anusha Kovi"
    })
    .toPromise()
    .then((data)=>{this.response="Record Update Successful"});
  }
  // getObservable()
  // {
  //   this.obsObj=this.http.get("http://jsonplaceholder.typicode.com/posts").subscribe
  //   this.http.get("http://localhost:3000/customers").subscribe
  //   (
  //     (data)=>{console.log(data);},
  //     (error)=>{console.log(error);}
  //   );
  // }
  postCustomers()
  {
    this.http.post("http://localhost:3000/customers",{
      "name":"Customer004"    
    })
    .toPromise()
    .then(()=>{});
  }
  DeleteCall()
  {
    this.http.delete("http://localhost:3000/customers/1")
    .subscribe(
      data=>{
        console.log("Delete Request is successful",data);
        this.status="Delete Request is successful";
      },
      error=>{
        console.log("Error",error);
        this.status="Error";
      }
    );
  }
}

