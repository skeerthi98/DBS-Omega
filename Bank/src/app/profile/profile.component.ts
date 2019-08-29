import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  FirstName:string;
  LastName:string;
  Address:string;
  MobileNo:string;
  EmailId:string;
  AlternateEmail:string;
  UserID:number;
  IfscCode:string;
  AccountNo:string;
  AvailableBalance:number; 
  TransactionLimit:number;
  constructor() { 
    this.FirstName="Sangeeta";
    this.LastName="Joshi";
    this.Address="A-21, Deep Laxmi Society, Charkop, near Ganesh Mandir, Kandivali, Hyderabad-500067 ";
    this.MobileNo="9898989898";
    this.EmailId="sangeeta.joshi2@gmail.com";
    this.AlternateEmail="sangeeta.joshi@gmail.com";
    this.UserID=601480763;
    this.IfscCode="DBSS0IN0811";
    this.AccountNo="881032242121";
    this.AvailableBalance=5000;
    this.TransactionLimit=5000000;
  }
  ngOnInit() {
  }

}
