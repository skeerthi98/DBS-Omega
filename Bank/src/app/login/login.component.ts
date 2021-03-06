import { Component } from '@angular/core';

import {LoginService} from '../login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public httpLogin:LoginService,private router:Router) {}
    Loginstatus:string;
    Flag:boolean;
  Login(pUserId:number,pPassword:string)
  {
    if(pUserId==4919931794 && pPassword=="mnbvcxz")
    {
  this.Loginstatus="Login Successful";
  this.httpLogin.Getcustomers();
this.Flag=true;
this.router.navigateByUrl('/userhome');
    }  
    else    
    {
      this.Flag=false;
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
