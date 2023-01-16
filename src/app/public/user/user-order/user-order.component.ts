import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../_services/order-service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit {

  userId: any = "";
  orders: any = [];
  thereIsOrders: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    // Récupération de l'id de l'utilisateur dans l'URL
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.getOrdersForUser(this.userId);
  }

  async getOrdersForUser(userId: number) {
    try {
      this.orders = await this.orderService.getOrdersForUser(userId);
      if (this.orders == "") {
        this.thereIsOrders = false;
      } else {
        this.thereIsOrders = true;
      }

    } catch (error: any) {
      console.log('order user', error)
    }
  }

  ReturnMenu(){
    this.router.navigate(['/user/user-profile/' + this.userId]);
  }
}
