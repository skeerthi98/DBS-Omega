import { Component, OnInit } from '@angular/core';

import {LoginService} from '../login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent {
  constructor(public httpLogin:LoginService,private router:Router) {}
  userid:number;
    Password:string;
    Loginstatus:string;
    Fa:boolean;
  Login(pUserId:number,pPassword:string)
  {
    if(pUserId==4919931794 && pPassword=="mnbvcxz")
    {
  this.Loginstatus="Login Successful";
  this.httpLogin.Getcustomers();
this.Fa=true;
this.router.navigateByUrl('/adminhome');
    }  
    else    
    {
      this.Fa=false;
      if(pUserId!=4919931794 && pPassword!="mnbvcxz")
      {
        this.Loginstatus="Login Unsuccessful due to incorrect UserID and Password. Please enter correct credentials. ";
      }
      else{
      if(pUserId!=4919931794)
      {
        this.Loginstatus="Login Unsuccessful due to incorrect UserID. Please enter correct UserID. ";
      }
      if(pPassword!="mnbvcxz")
      {
        this.Loginstatus="Login Unsuccessful due to incorrect password entry. Please enter correct password. ";
      } } 
    }
  }
}
