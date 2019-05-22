import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AddBankProvider {

  constructor(public http: HttpClient) {
  }

  addBank(name){
      let url = 'http://localhost:8000/bancos/banco/';
      let data = {
        'name':name  
      };
      return this.http.post(url, data);
 }

}
