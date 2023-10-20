import { Component, OnInit } from '@angular/core';
import { Infobip, AuthType } from '@infobip-api/sdk';
import { SmsService } from '../sms.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-cmd',
  templateUrl: './customer-cmd.component.html',
  styleUrls: ['./customer-cmd.component.css']
})

export class CustomerCmdComponent implements OnInit {
    displayStyle = "none";
    selectedcmd:string="";
    codeValidator!:number
    public phoneNumber!: string

    commands: Array<any> = [
      {numcmder:"001",namePrd:"Plateau",date:"07/11/2023", status:"2",action:""},
      {numcmder:"002",namePrd:"Pro Plateau",date:"10/12/2023",status:"1",action:""},
      {numcmder:"003",namePrd:"Plateau",date:"07/11/2023", status:"2",action:""},
      {numcmder:"004",namePrd:"Pro Plateau",date:"10/12/2023",status:"1",action:""},
      {numcmder:"005",namePrd:"Plateau",date:"07/11/2023", status:"2",action:""},
      {numcmder:"006",namePrd:"Pro Plateau",date:"10/12/2023",status:"3",action:""},
    ];
    cmder!:Array<any>;
    open(numcmd:string){
      this.displayStyle = "block";
      localStorage.setItem("codecmde", numcmd);
    }

    openPopup() {
      this.displayStyle = "block";
    }
    closePopup() {
      this.displayStyle = "none";
    }
    saveInfo() { // without type info
      this.generateCode();
      if(this.codeValidator!=null && this.phoneNumber != null){
        this.smsSd.sendMessage(this.codeValidator, this.phoneNumber);
        localStorage.setItem("code", this.codeValidator.toString());

        this.closePopup();
        this.functionRedierct();
      }else{
        this.closePopup();
      }


    }
    functionRedierct(){
      this.router.navigate(['/valid-bon']);
    }
    generateCode() {
      this.codeValidator = Math.floor(Math.random() * 9000 + 1000);
      }

   constructor (private smsSd:SmsService,private router: Router){
    if(localStorage.getItem("codecmde")){
      this.selectedcmd = localStorage.getItem("codecmde")||"";

  }

    if(localStorage.getItem("arraycmd")){

      this.cmder = JSON.parse(localStorage.getItem("arraycmd")||'{}');
    }else{
       this.cmder =this.commands;
       let cx = JSON.stringify(this.commands);
       localStorage.setItem("arraycmd",cx)
    }
    if(this.selectedcmd){
      const elem = this.cmder.find(({numcmder}) => numcmder==this.selectedcmd);
      if (elem) elem.status = "3";
      /* for (let num of this.cmder) {
        // if searchElement matches to the current element, print the index
        if (num.numcmder ==this.selectedcmd) {
           console.log(num);
        }
      } */
    }
   // this.cmder =this.commands;
    console.log(this.selectedcmd)
   }
  ngOnInit(): void {

  }
    private message="Hello Bonjour!";

    sendSms(code:number, phone:string): void{
      this.smsSd.sendMessage(code, phone);
  }

}
