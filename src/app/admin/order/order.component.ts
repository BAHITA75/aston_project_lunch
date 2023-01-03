import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meal } from 'src/app/model/meal';
import { Order } from 'src/app/model/order';
import { Quantity } from 'src/app/model/quantity';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild('priceMenu') priceMenu: ElementRef;
  @ViewChild('priceMeal') priceMeal: ElementRef;
  @ViewChild('totalPrice') totalPrice: ElementRef;
  
  totalPriceResult : string;
  orders : Order[];
  constructor(private orderService: OrderService) { }
  
  ngOnInit(): void {
    this.orderService.findAll().subscribe(data => {
      this.orders = data;
      console.log(this.orders);
    });
    // this.priceMeal.nativeElement.classList.add('hidden');
    // this.priceMenu.nativeElement.classList.add('hidden');
  }
  yes(orders: object){
    console.log(orders);
    for (const order in orders) {
      console.log(order);
      
    }
    this.totalPriceResult = this.priceMeal.nativeElement.value;

  }
}
