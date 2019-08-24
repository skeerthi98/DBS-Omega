import { Component, OnInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ng-model-demo',
  templateUrl: './ng-model-demo.component.html',
  styleUrls: ['./ng-model-demo.component.css']
})
export class NgModelDemoComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  MessageStatus:string;
  prop:any;

  constructor() { 
    this.MessageStatus="Message Not yet received";  
    this.prop="red"; //prop = {color:'red'};   
  }

  BlogText(Name:string,Message:string){
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
