import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url: string = 'http://localhost:8080/stone.lunchtime/order';

  constructor(private http: HttpClient) {}

  //.............. Recuperation des Commandes d'un utilisateur .............//
  async getOrdersForUser(userId: number) {

    let url = this.url + '/findallforuser/' + userId;

    return await this.http.get(url).toPromise();
  }

  //.................. Suppression d'une commande ..................../
  async deleteOrder(orderId: any) {

    let url = this.url + "/cancel/" + orderId;

    return await this.http.patch(url, "",).toPromise();
  }

}
