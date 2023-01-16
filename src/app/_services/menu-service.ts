import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../_interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

 url:string = "http://localhost:8080/lunchtime" ;
 tokenItem:any = localStorage.getItem('token') ;

//-------------------- CONSTRUCTEUR ----------------------------------------------
  constructor(private http:HttpClient) { }
//-------------------- RECUPERATION DES MENU DU JOUR POUR LA SEMAINE ----------------------------------------------
  async getWeekMenu(){
    //REFORMULATION DE L'URL
    let url = this.url + "/menu/findallavailableforweek/";

    //FORMATION DU HEADER
    const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'accept': 'application/json',
    };

    //REQUETE API
    return await this.http.get(url, { headers }).toPromise();
  }

//-------------------- RECUPERATION DE LA CARTE POUR UNE SEMAINE ----------------------------------------------
  async getCarte(){
    //REFORMULATION DE L'URL
      var url = this.url + "/meal/findallavailablefortoday" ;

      //FORMUALTION DU HEADER
      const headers = { 'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'accept': 'application/json' };

      //REQUETE API
      return await this.http.get(url, { headers }).toPromise();
  }
}
