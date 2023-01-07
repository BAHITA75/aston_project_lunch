import { Injectable } from '@angular/core';
import { User } from '../_model/user';
import { Img } from '../_model/img';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string;
  private tokenItem: any = localStorage.getItem('token');
  userInfos: any = '';

  constructor(private http: HttpClient) {
    this.url = `http://localhost:8080/stone.lunchtime`;
  }

  //--------------------  RECUPERATION DES NFORMATIONS D'UN UTILISATEUR ----------------------------------------------
  async getUserInfos(userId: number) {
    //FORMULATION HEADER
    const headers = {
      Authorization: this.tokenItem,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      accept: 'application/json',
    };

    //REQUETE API: recuperer l'utilisateur par son id
    return await this.http.get(`${this.url}/user/find/${userId}`).toPromise();
  }

  //------------------------ RECUPERATION DE LA PHOTO DE L'UTILISATEUR ---------------------------------
  async getUserImage(userId: number) {
    //REQUETE API
    return await this.http
      .get(`${this.url}/user/findimg/${userId}`)
      .toPromise();
    // return this.http.get<Img>(`${this.url}/user/findimg/${userId}`).subscribe(
    //   data => console.log(data)
    // );
  }

  updateUser$(user: User): Observable<User> {
    return this.http.patch<User>(`${this.url}/user/update/${user.id}`, user);
  }

  //--------------------  Modification des informations de l'utilisateur ----------------------------------------------
  async updateUser(user: any, userId: number) {
    //REFOMULATION URL
    let url = this.url + '/user/update/' + userId;

    //FORMUALTION HEADER
    const headers = {
      "Authorization": this.tokenItem,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "accept": 'application/json',
    };

    //REQUETE API
    return await this.http.patch(url, user, {headers}).toPromise();
  }

  //------------------------- Changement de la photo de l'utilisateur --------------------------
  async changeUserPicture(userId: number, avatarObj: any) {
    //REFORMUALTION URL
    let url = this.url + '/user/updateimg/' + userId;

    //FORMULATION HEADER
    const headers = {
      "Authorization": this.tokenItem,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "accept": 'application/json',
    };

    //REQUETE API
    return await this.http.patch(url, avatarObj, { headers }).toPromise();
  }

  //--------------------  Creation d'un compte (S'enregistrer) ----------------------------------------------
  async createAccount(people: any){
    //REFORMULATION DE L'URL
    let url = this.url + "/user/register" ;
    //FOMULATION DU HEADER
    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'accept': 'application/json' };

    //REQUETE API
    return await this.http.put(url, people, { headers }).toPromise();
  }
}
