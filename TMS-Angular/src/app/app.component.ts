import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  check:string;
  Login()
  {
    console.log("In login");
    this.check="login";
  }
  Register()
  {
    console.log("In registry");
    this.check="register";
  }
  About()
  {
    console.log("In about");
    this.check="about";
  }
  Track()
  {
    console.log("In Tracking");
    this.check="track";
  }
  Home()
  {
    this.check="home";
  }
  Food()
  {
    console.log("In Food");
    this.check="food";
  }
}
