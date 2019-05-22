import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddBankProvider } from '../../providers/add-bank/add-bank';

@IonicPage()
@Component({
  selector: 'page-add-banks',
  templateUrl: 'add-banks.html',
})
export class AddBanksPage {

  bancoName: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public addBankProvider: AddBankProvider) {
  }

  addBank(){
  this.addBankProvider.addBank(this.bancoName).subscribe(
    (data_resp)=>{console.log(data_resp)},
    (error)=>{console.log('error')},
  )
  }

}
