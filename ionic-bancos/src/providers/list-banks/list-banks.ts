import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ListBanksProvider {

  url:string = 'http://localhost:8000/bancos/banco/';

  constructor(public http: HttpClient) {
  }
 
 list_banks(){
     return this.http.get(this.url);
   }
 }

