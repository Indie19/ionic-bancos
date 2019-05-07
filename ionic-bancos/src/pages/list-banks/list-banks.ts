import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListBanksProvider } from '../../providers/list-banks/list-banks';

@IonicPage()
@Component({
  selector: 'page-list-banks',
  templateUrl: 'list-banks.html',
})
export class ListBanksPage {

  banksArray: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public listBankProvider: ListBanksProvider) {
  }

  ionViewDidLoad() {
      this.queryBanks()
  }

  queryBanks(){
      this.listBankProvider.list_banks().subscribe(
          (data_resp) => {
              console.log(data_resp)
              this.banksArray = data_resp;
          },
          (error) => {console.log(error.error)}
      );    
  }
 
}
