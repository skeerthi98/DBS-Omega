import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Userid:number;
  Password:string;
  MobileStatus:string;
  StrStatus:String;
  Flag:boolean;

  Register(){
    document.getElementById("created").style.display="block"; 
  }
MySubmit(mNo:number)
{
  console.log("mobile num validator function");
  if(mNo==123456789)
  {
this.MobileStatus="Registered Successfully";
this.Flag=true;
  }  
  else    
  { 
      this.MobileStatus="** Enter valid mobile number";
      this.Flag=false;
  }
}
validateStr(str:String)
{
  console.log("String validator function");
  if(str.match(/^[A-Z]*$/))
  {
this.StrStatus="";
this.Flag=true;
  }  
  else    
  { 
      this.StrStatus="** Enter alphabets only";
      this.Flag=false;
  }
}
}
