import { Component, OnInit,OnChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo-ngmodel',
  templateUrl: './demo-ngmodel.component.html',
  styleUrls: ['./demo-ngmodel.component.css']
})

export class DemoNgmodelComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  MessageStatus:string;
  Prop:any;

  constructor() { 
    this.MessageStatus="Message Not yet received";  
    this.Prop="blue";   
  }

  Demo(Name:string,Message:string){
    this.MessageStatus="Message received";
  }
  
  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges(){
    console.log("ngOnChanges");
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

}
