import { Component, OnInit } from '@angular/core';
import {FundTransferService} from '../funds-transfer.service';
import {Subscription} from 'rxjs';
import { Observable} from 'rxjs';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-funds-transfer',
  templateUrl: './funds-transfer.component.html',
  styleUrls: ['./funds-transfer.component.css']
})
export class FundsTransferComponent implements OnInit {


  constructor(private httpTransfer:FundTransferService) { }
  PaymentType : string;
  OnSelectPaymentType:boolean=false;
  SendersAccountNumber:string="248329479128";
  ReceiversAccountNumber:string="543210928956";
  SendersBalance:number=32000;
  ReceiversBalance:number=40000;
  Money:any;
  Message:string;
  OnTransfer:boolean=false;
  Imps:boolean=false;
  Neft:boolean=false;
  Rtgs:boolean=false;
  Upi:boolean=false;
  Details:Account[];
  Update:any;
  Item:any;
  Warning : string;
  ngOnInit() {
    this.httpTransfer.GetAccountDetails().subscribe(details => this.Details=details);
    console.log(this.Details);
    for(this.Item in this.Details)
        {
          console.log(this.Details[this.Item]['balance']*1);
          if((this.Details[this.Item]['balance']*1)<5000)
          {
            console.log("warning");
              this.Warning = "You should maintain a minimum balance of 5000 INR";
          }
        }
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
  for(this.Item in this.Details)
        {
          console.log(this.Details[this.Item]['balance']*1);
          if((this.Details[this.Item]['balance']*1)<5000)
          {
            console.log("warning");
              this.Warning = "You should maintain a minimum balance of 5000 INR";
          }
        }
  }
  TransferMoneyImps(accountNumber:string,confirmAccountNumber:string,ifsc:string,money:any,purpose:string){
    if(accountNumber == confirmAccountNumber)
    {
      if(ifsc!=null && ifsc.length==10) {

        if(money != null && money < 200000)
        {
          this.Money=money;
          //this.httpTransfer.PutBalance().subscribe(update => this.update=update);
          this.UpdateBalance(this.SendersAccountNumber,"send",this.Money);
          this.UpdateBalance(this.ReceiversAccountNumber,"receive",this.Money);
          this.OnTransfer=true;
        }
        else
          this.Message="You can only transfer upto 2,00,000 using IMPS";
    }
    else
      this.Message="Please check IFSC Code";
    }
    else
      this.Message="Please check Benificiary Account Number";
  }

  TransferMoneyNeft(accountNumber:string,confirmAccountNumber:string,ifsc:string,money:any,purpose:string){
    if(accountNumber == confirmAccountNumber)
    {
      if(ifsc != null && ifsc.length==10) {
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
      this.Message="Please check IFSC Code";
    }
    else
      this.Message="Please check Benificiary Account Number";
  }

  TransferMoneyRtgs(accountNumber:string,confirmAccountNumber:string,ifsc:string,money:any,purpose:string){
    if(accountNumber == confirmAccountNumber)
    {
      if(ifsc != null && ifsc.length==10) {
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
      this.Message="Please check IFSC Code";
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
        for(this.Item in this.Details)
        {
          this.Details[this.Item]['balance']= this.SendersBalance;
        }
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

