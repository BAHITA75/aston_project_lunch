import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meal } from 'src/app/_model/meal';
import { Order } from 'src/app/_model/order';
import { Quantity } from 'src/app/_model/quantity';
import { OrderService } from 'src/app/services/order.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild('priceMenu') priceMenu: ElementRef;
  @ViewChild('priceMeal') priceMeal: ElementRef;
  @ViewChild('totalPrice') totalPrice: ElementRef;
  
  startDate : string;
  endDate : string;
  selectedValue : number;
  orders : Order[];
  ordersFilter : Order[];
  constructor(private orderService: OrderService, private http: HttpClient) { }
  
  ngOnInit(): void {
    this.orderService.findAll().subscribe(data => {
      this.orders = data;
    });
  }


  submitDates() {

    if (this.startDate == undefined && this.endDate == undefined) {
      let status = this.selectedValue;
      if (status == undefined) {
        status = 0;
      }
      
      const url = `http://localhost:8080/stone.lunchtime/order/findallbetweendateinstatus?status=${status}`
  
      this.http.get<Order[]>(url).subscribe(data => {
        this.ordersFilter = data;
        console.log(this.ordersFilter);
      });
    }
    let start = this.startDate.replace(/-/g, "%2F");
    let end = this.endDate.replace(/-/g, "%2F");
    
    let status = this.selectedValue;
    if (status == undefined) {
      status = 0;
    }
    
    const url = `http://localhost:8080/stone.lunchtime/order/findallbetweendateinstatus?status=${status}&beginDate=${start}&endDate=${end}`

    this.http.get<Order[]>(url).subscribe(data => {
      this.ordersFilter = data;
      console.log(this.ordersFilter);
    });
}
}
