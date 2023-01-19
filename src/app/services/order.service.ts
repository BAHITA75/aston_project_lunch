import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../_interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderAllUrl: string;

  constructor(private http: HttpClient) {
    this.orderAllUrl = 'http://localhost:8080/stone.lunchtime/order/findall';
  }

  public findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderAllUrl);
  }
}
