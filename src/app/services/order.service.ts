import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../_model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderAllUrl: string;
  private findallbetweendateinstatusUrl: string;

  constructor(private http: HttpClient) {
    this.orderAllUrl = 'http://localhost:8080/stone.lunchtime/order/findall';
    this.findallbetweendateinstatusUrl = 'http://localhost:8080/stone.lunchtime/order/findallbetweendateinstatus?status=&beginDate=2023%2F01%2F01'
  }

  public findAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderAllUrl);
  }

  public findallbetweendateinstatus(status: string, beginDate: string, endDate: string): Observable<Order[]> {
    return this.http.get<Order[]>(`http://localhost:8080/stone.lunchtime/order/findallbetweendateinstatus?status=${status}&beginDate=${beginDate}&endDate=${endDate}`);
  }

}
