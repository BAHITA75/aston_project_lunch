import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../model/menu';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuUrl: string;

  constructor(private http: HttpClient) {
    this.menuUrl = 'http://localhost:8080/stone.lunchtime/menu/findall';
  }

  public findAll(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menuUrl);
  }
}
