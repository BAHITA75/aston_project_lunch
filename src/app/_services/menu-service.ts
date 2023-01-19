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

  constructor(private http: HttpClient) {}

//.......................... Récupérer la menu de la semaine.......................... //
  async getWeekMenu() {
    let url = this.url + '/menu/findallavailableforthisweek';

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

  //.......................... Récupérer la photo du menu.......................... //
  async getMenuImage(menuId: number) {
    let url = this.url + '/menu/findimg/';

    return await this.http.get(url + menuId).toPromise();
  }


  //.......................... Récupérer la carte de la semaine.......................... //
  async getCarte() {
    var url = this.url + '/meal/findallavailablefortoday';

    return await this.http.get(url).toPromise();
  }
}
