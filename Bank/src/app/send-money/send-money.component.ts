import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent implements OnInit {

  constructor() { }

  PaymentType : string;
  OnSelectPaymentType:boolean=false;
  SendersAccountNumber:string="12345";
  ReceiversAccountNumber:string="54321";
  SendersBalance:number=50000;
  ReceiversBalance:number=40000;
  Money:any;
  Message:string;
  OnTransfer:boolean=false;

  ngOnInit() {
  }
  TransferType(type:string){
    this.PaymentType=type;
    this.OnSelectPaymentType=true;
  }
  TransferMoney(accNum:string,money:any){
    this.Money=money;
    this.UpdateBalance(this.SendersAccountNumber,"send",this.Money);
    this.UpdateBalance(this.ReceiversAccountNumber,"receive",this.Money);
    this.OnTransfer=true;
    
  }
  UpdateBalance(accNum:string,mode:string,money:any){
    if(mode == 'send'){
      if(this.SendersBalance >money)
      {
        this.SendersBalance = this.SendersBalance-money;
        this.Message="Money transfered Sucessfully :)";
      }
      else
        this.Message="No sufficient money to transfer :("
    }
    else{
      this.ReceiversBalance = this.ReceiversBalance+money;
    }
  }
}
