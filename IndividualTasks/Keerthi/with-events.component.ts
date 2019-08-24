import { Component, OnInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-with-events',
  templateUrl: './with-events.component.html',
  styleUrls: ['./with-events.component.css']
})
export class WithEventsComponent implements OnInit,OnChanges,DoCheck,OnDestroy {
 person:string ="Anya";
 people:string[]=["Anya","kavya","shirisha"];
  constructor() { 
    this.username ="admin";
    console.log("Good Morning");
    this.prop={color:'blue'};
  }
  username:string;
  password:string;
  loginStatus:string;
  prop = {color:'red'};
  display:boolean=true;
  Display()
  {
    this.display = !this.display;
  }
  addPerson(pPerson:string)
  {
    this.people.push(pPerson);
  }
  Login(pUsername,pPassword)
  {
  
    if(pUsername == "admin" && pPassword == "nimda")
    {
      this.loginStatus="Login Successful";
      this.display=true;
    }
    else
    {
      this.display=false;
    }
  }
  ngOnInit(){
    console.log("HEY");
    
  }
  ngOnChanges() {
  console.log("Color changed");
  }
  ngDoCheck()
  {
    console.log("Mineee bro");
  }
  ngOnDestroy()
  {
   console.log("Destroyed");
  }
 
}
