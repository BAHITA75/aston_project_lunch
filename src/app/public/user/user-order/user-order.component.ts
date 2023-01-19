import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/_interfaces/order';
import { OrderService } from '../../../_services/order-service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss'],
})
export class UserOrderComponent implements OnInit {
  userId: any;
  orders: any = [];
  hasOrders: boolean = false;
  status: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    // Récupération de l'id de l'utilisateur dans l'URL
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.getOrdersForUser(this.userId);
  }

  async getOrdersForUser(userId: number) {
    try {
      this.orders = await this.orderService.getOrdersForUser(userId);

      if (this.orders == '') {
        this.hasOrders = false;
      } else {
        this.hasOrders = true;
      }

      this.orders.forEach((item: any) => {
        // on retourne une string selon la valeur du status
        switch (item.status) {
          case 0:
            item.status = 'Créée';
            break;
          case 1:
            item.status = 'Livrée';
            break;
          case 2:
            item.status = 'Annulée';
            break;
        }
      });

    } catch (error: any) {
      console.log('order user', error);
    }
  }

  //-------------------- Suppression de la commande ---------------------------//
  async deleteOrder(orderId: any) {
    try {
      console.log(orderId)
      await this.orderService.deleteOrder(orderId);
      this.getOrdersForUser(this.userId);
    } catch (error: any) {
      console.log('delete order', error);
    }
  }

  ReturnUserProfile() {
    this.router.navigate(['/user/user-profile/' + this.userId]);
  }
}
