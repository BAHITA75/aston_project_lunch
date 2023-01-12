import { Injectable } from '@angular/core';
import { User } from '../_model/user';
import { Img } from '../_model/img';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string;
  private tokenItem: any = localStorage.getItem('token');
  userInfos: any = '';

  constructor(private http: HttpClient) {
    this.url = `http://localhost:8080/stone.lunchtime/user`;
  }

  //--------------------  RECUPERATION DES NFORMATIONS D'UN UTILISATEUR ----------------------------------------------
  async getUserInfos(userId: number) {
    //FORMULATION HEADER
    const headers = {
      "Authorization": this.tokenItem,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "accept": 'application/json',
    };

    //REQUETE API: recuperer l'utilisateur par son id
    return await this.http.get(`${this.url}/find/${userId}`).toPromise();
  }

  //------------------------ RECUPERATION DE LA PHOTO DE L'UTILISATEUR ---------------------------------
  async getUserImage(userId: number) {
    const headers = {
      "Authorization": this.tokenItem,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "accept": 'application/json',
    };
    return await this.http
      .get(`${this.url}/findimg/${userId}`, { headers }).toPromise();
    // return this.http.get<Img>(`${this.url}/user/findimg/${userId}`).subscribe(
    //   data => console.log(data)
    // );
  }

  //--------------------  Modification des informations de l'utilisateur ----------------------------------------------
  async updateUser(user: any, userId: number) {
    const headers = {
      "Authorization": this.tokenItem,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/menu',
      "accept": 'application/json',
    };

    return await this.http
      .patch(`${this.url}/update/${userId}`, user, { headers })
      .toPromise();
  }

  //------------------------- Changement de la photo de l'utilisateur --------------------------
  async changeUserPicture(userId: number, avatarObj: any) {
    const headers = {
      "Authorization": this.tokenItem,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "accept": 'application/json',
    };

    return await this.http
      .patch(`${this.url}/updateimg/${userId}`, avatarObj, { headers })
      .toPromise();
  }

  //--------------------  Creation d'un compte (S'enregistrer) ----------------------------------------------
  async createUser(people: any) {
 
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "accept": 'application/json',
    };

    return await this.http.put(`${this.url}/register`, people, { headers }).toPromise();
  }

  //--------------------  Supprission du compte utilisateur ----------------------------------------------
  async deleteUser(userId: number) {

    const headers = {
      "Authorization": this.tokenItem,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "accept": 'application/json',
    };

    return await this.http.delete(`${this.url}/delete/${userId}`, { headers }).toPromise();
  }
}
