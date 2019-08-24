import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  constructor(public http: HttpClient) {}
  CurrentPosition:any[];
  CurrentLocation:string[];
  CurrentTime:string[];
  Source:string;
  Destination:string;
  OnTrack:boolean=false;

  response:any;
  BusNum:any;
  ngOnInit() {
  }
    PassengerLocation:string="";
    BusCurrentLocation:string="Goa";

  TrackBus(busnum:string){
    this.BusNum=busnum;
    this.http.get("http://localhost:3000/"+busnum)
      .toPromise()
      .then(data =>{this.response=data;})
      .catch((error)=>{console.error("404:",error)})
      ,(error=>console.error("error",error));
  }

  Track(BusNum:string){
    if(BusNum == '12345'){
      this.OnTrack=true;

      this.Source="Secunderabad";
      this.Destination="Goa";

      this.TrackBus("12345");

      // this.CurrentPosition=[
      //   {Time:"12:00", Loc:"Secunderabad"},
      //   {Time:"01:25", Loc:"Hyderabad"},
      //   {Time:"23:50", Loc:"Belgaum"},
      // ];
      
    }
    if(BusNum == '54321'){
      this.OnTrack=true;
      
      this.Source="Hyderabad";
      this.Destination="Bangalore";

      this.TrackBus("54321");

      // this.CurrentPosition=[
      //   {Time:"05:30", Loc:"Hyderabad"},
      //   {Time:"20:25", Loc:"Kurnool"},
      //   {Time:"21:55", Loc:"Raichur"},
      //   {Time:"01:30", Loc:"Mangalore"}
      // ];

      
    }
  }
  



  

}
