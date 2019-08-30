import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-modify',
  templateUrl: './customer-modify.component.html',
  styleUrls: ['./customer-modify.component.css']
})
export class CustomerModifyComponent implements OnInit {

  constructor() { }

  MobileStatus:String;
  Flag:boolean;
  ngOnInit() {
  }
  ModifyDetails(){
    document.getElementById("modified").style.display="block"; 
  }
  MySubmit(mNo:String)
  {
    console.log("mobile num validator function");
    if(mNo.match(/^[0-9]{10}$/))
    {
  this.MobileStatus="";
this.Flag=true;
    }  
    else    
    { 
        this.MobileStatus="** Enter valid mobile number";
        this.Flag=false;
    }
  }
}
