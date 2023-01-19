import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../_interfaces/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  url: string = 'http://localhost:8080/stone.lunchtime';

  tokenItem: any = localStorage.getItem('token');

  //-------------------- CONSTRUCTEUR ----------------------------------------------
  constructor(private http: HttpClient) {}
  //-------------------- RECUPERATION DES MENU DU JOUR POUR LA SEMAINE ----------------------------------------------
  async getWeekMenu() {
    let url = this.url + '/menu/findallavailableforthisweek/';

    return await this.http.get(url).toPromise();
  }

  // ------------ Meunus de la semaine et jour spécifiés
  async getWeekAndDayMenu(weekNb : number, dayNb: number) {
    let url = this.url + `/menu/findallavailableforweekandday/${weekNb}/${dayNb}/`;

    return await this.http.get(url).toPromise();
  }

  // ------------ Meunus de la semaine et jour spécifiés
  async getTodayMenu() {
    let url = this.url + `/menu/findallavailableforthisweek/`;

    return await this.http.get(url).toPromise();
  }

  //------------------------ Recupuration de la photo du menu ---------------------------------
  async getMenuImage(menuId: number) {
    let url = this.url + '/menu/findimg/';

    return await this.http.get(url + menuId).toPromise();
  }

  public getWeekMenu$(): Observable<Menu[]> {
    let url = this.url + '/menu/findallavailableforthisweek';
    return this.http.get<Menu[]>(url);
  }

  async getMenuToday$() {
    let url = this.url + '/menu/findallavailablefortoday';

    return await this.http.get(url).toPromise();
  }

  public getMenuToday(): Observable<Menu[]> {
    
    let url = this.url + '/menu/findallavailablefortoday';
    return this.http.get<Menu[]>(url);
  }

  //-------------------- RECUPERATION DE LA CARTE POUR UNE SEMAINE ----------------------------------------------
  async getCarte() {
    //REFORMULATION DE L'URL
    var url = this.url + '/meal/findallavailablefortoday';

    //REQUETE API
    return await this.http.get(url).toPromise();
  }
}
