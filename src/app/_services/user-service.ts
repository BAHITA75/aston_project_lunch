import { Injectable } from '@angular/core';
import { User } from '../_model/user';
import { Img } from '../_model/img';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

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
      "Authorization": this.tokenItem,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "accept": 'application/json',
    };

    //REQUETE API: recuperer l'utilisateur par son id
    return await this.http.get(`${this.url}/user/find/${userId}`).toPromise();
  }

  //------------------------ RECUPERATION DE LA PHOTO DE L'UTILISATEUR ---------------------------------
  async getUserImage(userId: number) {
  const headers = { 'Authorization': this.tokenItem ,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'accept': 'application/json',
  };
    return await this.http.get(`${this.url}/user/findimg/${userId}`, {headers}).toPromise();
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

  //--------------------  Mot de passe oublié ----------------------------------------------//
  async forgotPassword(resetPasswordForm : FormGroup){
    // Url de la requete
    let url = this.url + "/forgotpassword?email=" + resetPasswordForm.value.email ;
    // Requete de l' Api
    return await this.http.post(url,"", {observe : 'response'}).toPromise();
  }

  // async forgotPassword(resetPasswordForm : FormGroup): Observable<HttpResponse<Response>> {
  //   return this.http.post<Response>(`${this.url}/forgotpassword?email=" ${resetPasswordForm.value.email}`, credentials, {observe: 'response'});
  // }

  //--------------------  Creation d'un compte (S'enregistrer) ----------------------------------------------
  async createAccount(people: any){
    //REFORMULATION DE L'URL
    let url = this.url + "/user/register" ;
    //FOMULATION DU HEADER
    const headers = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'accept': 'application/json' };

    //REQUETE API
    return await this.http.put(url, people, { headers }).toPromise();
  }
}
