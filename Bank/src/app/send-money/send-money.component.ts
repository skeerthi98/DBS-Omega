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
  Imps:boolean=false;
  Neft:boolean=false;
  Rtgs:boolean=false;
  Upi:boolean=false;

  ngOnInit() {
  }
  TransferType(type:string){

    if(type=='IMPS')
      this.Imps=true;
    if(type=='RTGS')
      this.Rtgs=true;
    if(type=='NEFT')
      this.Neft=true;
    if(type=='UPI')
      this.Upi=true;
    this.PaymentType=type;
    this.OnSelectPaymentType=true;
  }
  TransferMoneyImps(accountNumber:string,confirmAccountNumber:string,ifsc:string,money:any,purpose:string){
    if(accountNumber == confirmAccountNumber)
    {
      if(ifsc!=null) {

        if(money != null && money < 200000)
        {
          this.Money=money;
          this.UpdateBalance(this.SendersAccountNumber,"send",this.Money);
          this.UpdateBalance(this.ReceiversAccountNumber,"receive",this.Money);
          this.OnTransfer=true;
        }
        else
          this.Message="You can only transfer upto 2,00,000 using IMPS";
    }
    else
      this.Message="Please enter IFSC Code";
    }
    else
      this.Message="Please check Benificiary Account Number";
  }

  TransferMoneyNeft(accountNumber:string,confirmAccountNumber:string,ifsc:string,money:any,purpose:string){
    if(accountNumber == confirmAccountNumber)
    {
      if(ifsc != null) {
      if(money != null  && money < 1000000)
      {
        this.Money=money;
        this.UpdateBalance(this.SendersAccountNumber,"send",this.Money);
        this.UpdateBalance(this.ReceiversAccountNumber,"receive",this.Money);
        this.OnTransfer=true;
      }
      else
        this.Message="You can only transfer upto 10,00,000 using NEFT";
    }
    else
      this.Message="Please enter IFSC Code";
    }
    else
      this.Message="Please check Benificiary Account Number";
  }

  TransferMoneyRtgs(accountNumber:string,confirmAccountNumber:string,ifsc:string,money:any,purpose:string){
    if(accountNumber == confirmAccountNumber)
    {
      if(ifsc != null) {
      if(money != null  && money > 200000)
      {
        this.Money=money;
        this.UpdateBalance(this.SendersAccountNumber,"send",this.Money);
        this.UpdateBalance(this.ReceiversAccountNumber,"receive",this.Money);
        this.OnTransfer=true;
      }
      else
        this.Message="You can only transfer a minimum amount of 2,00,000 using RTGS";
    }
    else
      this.Message="Please enter IFSC Code";
    }
    else
      this.Message="Please check Benificiary Account Number";
  }

  TransferMoneyUpi(upiId:string,money:any){
      if(upiId != null){
        if(money!= null) {
          this.Money=money;
          this.UpdateBalance(this.SendersAccountNumber,"send",this.Money);
          this.UpdateBalance(this.ReceiversAccountNumber,"receive",this.Money);
          this.OnTransfer=true;
        }
        else
        this.Message="Please enter money";
      }
      else
      this.Message="Please enter UPI ID";
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
