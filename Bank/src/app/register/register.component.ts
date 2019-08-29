import { Component, OnInit } from '@angular/core';

import {LoginService} from '../login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  Registerstatus:string;
  Fa:boolean;
  constructor(public httpRegister:LoginService) { }
  Register(pDnumber:number,pPin:number,pAnumber:number,pEmail:String,pDate:string,pPassword:String,pRepeatPassword:String)
  {
    if(pDnumber!=null && pPin!=null && pAnumber!=null && pEmail!=null && pDate!=null && pPassword!=null && pRepeatPassword!=null)
    {
      if(pPassword==pRepeatPassword){
      this.httpRegister.PostCall(pDnumber,pPin,pAnumber,pEmail,pDate,(Math.floor(Math.random() * 1000000000)),pPassword);
      this.Registerstatus="Registration Successful";
      this.Fa=true;}
      else
      {
        this.Registerstatus="Registration Not Successful because password and repeat password are not equal. Please enter the same passwords";
      }
    }
    }
  }
