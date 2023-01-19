import { Injectable } from '@angular/core';
import { User } from '../_interfaces/user';
import { Img } from '../_interfaces/img';
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
  
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/findAll`);
  }

  //------------------------ RECUPERATION DE LA PHOTO DE L'UTILISATEUR ---------------------------------
  async getUserImage(userId: number) {
    const headers = {
      Authorization: this.tokenItem,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      accept: 'application/json',
    };
    return await this.http
      .get(`${this.url}/findimg/${userId}`, { headers })
      .toPromise();
    // return this.http.get<Img>(`${this.url}/user/findimg/${userId}`).subscribe(
    //   data => console.log(data)
    // );
  }

  //--------------------  Modification des informations de l'utilisateur ----------------------------------------------
  async updateUser(user: any, userId: number) {
    const headers = {
      Authorization: this.tokenItem,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/menu',
      accept: 'application/json',
    };

    return await this.http
      .patch(`${this.url}/update/${userId}`, user, { headers })
      .toPromise();
  }

  //------------------------- Changement de la photo de l'utilisateur --------------------------
  async changeUserPicture(userId: number, avatarObj: any) {
    const headers = {
      Authorization: this.tokenItem,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      accept: 'application/json',
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
      accept: 'application/json',
    };

    return await this.http
      .put(`${this.url}/register`, people, { headers })
      .toPromise();
  }

  //--------------------  Supprission du compte utilisateur ----------------------------------------------
  async deleteUser(userId: number) {
    const headers = {
      Authorization: this.tokenItem,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      accept: 'application/json',
    };

    return await this.http
      .delete(`${this.url}/delete/${userId}`, { headers })
      .toPromise();
  }

  //--------------------  VERIFICATION D'AUTHENTIFICATION ----------------------------------------------
  onVerifAuthentification() {
    //RECUPERATION DE L'OBJET USER LOCAL
    let userCrypted: any = localStorage.getItem('user');
    //DECRYPTAGE DE L'OBJET
    let userUncrypted: any = JSON.parse(userCrypted);

    //SELON LE RETOUR DE L'OBJET, ON DEFINIT LA CONNEXION
    if (userUncrypted == null) {
      return 0; // personne n'est connecté
    } else {
      let isLunchLady = userUncrypted.isLunchLady;

      if (isLunchLady == false) {
        return 1; // utilisyateur connecté
      } else {
        return 2; // continiere connecté
      }
    }
  }
}
