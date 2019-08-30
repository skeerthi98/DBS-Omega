import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountclosingform',
  templateUrl: './accountclosingform.component.html',
  styleUrls: ['./accountclosingform.component.css']
})
export class AccountclosingformComponent implements OnInit {

  constructor() { }
  userid:number=0;
  Password:string=null;
  mobileStatus:string;
  strStatus:String;
  addrStatus:String;
  nameStatus:String;
  nameS:boolean;    
  mbS:boolean;
  strS:boolean;
  addrS:boolean;
  nomS:boolean;
  isAccValid:String;
  ngOnInit() {
  }
  accValidator(accno)
  {
    if(accno==12345) {
      this.isAccValid="Y";
    }else{
      this.isAccValid="N";
    }
    
  }
  MySubmit(mNo:number)
  {
    console.log("mobile num validator function");
    if(mNo==123456789)
    {
  this.mobileStatus="";
this.mbS=true;
    }  
    else    
    { 
        this.mobileStatus="** Enter valid mobile number";
        this.mbS=false;
    }
  }

  setradio(has_nominee)
  {
    if(has_nominee=='Y') {
      this.nomS=true;
    }else if(has_nominee=='N') {
      this.nomS=false;
    }
  }
  validateName(str:String)
  {
    console.log("String validator function");
    if(str.match(/^[a-zA-Z]*$/))
    {
  this.nameStatus="";
this.nameS=true;
    }  
    else    
    { 
        this.nameStatus="** Enter alphabets only";
        this.nameS=false;
    }
  }
  validateStr(str:String)
  {
    console.log("String validator function");
    if(str.match(/^[a-zA-Z]*$/))
    {
  this.strStatus="";
this.strS=true;
    }  
    else    
    { 
        this.strStatus="** Enter alphabets only";
        this.strS=false;
    }
  }

  validateAddr(addr : String)
  {
    console.log("Address validator function");
    if(addr.length<46&&addr.match(/^[a-zA-Z,./][0-9]*$/))
    {
      this.addrStatus="";
      this.addrS=true;
    }  
    else    
    { 
      if((addr.length>46))
      {
        this.addrStatus="** Address length exceeded ";
        this.addrS=false;

      }
        else if(!(addr.match(/^[a-zA-Z,./][0-9]*$/)))
        {
          this.addrStatus="** Special characters not allowed(except , . /)";
          this.addrS=false;
  
        }
       
    }

    
  }
}
