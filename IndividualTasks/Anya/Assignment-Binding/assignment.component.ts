import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor() { }
  Text:string;
  // Greeting:string="How are you?";
  holder:string="Enter your name...";
  prop="red";
  prop2={"background-color":"white"};
  Submit(name:string){
    this.Text=name;
  }
  ngOnInit() {
  }

}
