import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  constructor() { }
  Username:string;
  Email:string;
  Password:string;
  Rpassword:string;
  Registerstatus:string;
  Fa:boolean;
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
}
