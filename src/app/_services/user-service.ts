import { TokenService } from 'src/app/_services/auth/token.service';
import { Injectable } from '@angular/core';
import { User } from '../_interfaces/user';
import { Img } from '../_interfaces/img';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string;
  tokenItem: any = localStorage.getItem('token');
  userInfos: any = '';

  constructor(private http: HttpClient, private tokenService: TokenService) {
    this.url = `http://localhost:8080/stone.lunchtime/user`;
  }

  // ---------------------Récuperation des informations d'un utilisateur ------------------------//
  async getUserInfos(userId: number) {

    return await this.http.get(`${this.url}/find/${userId}`).toPromise();
  }

  //------------------------ Récupération de l'image de l'utilisateur -----------------------------//
  async getUserImage(userId: number) {
    
    return await this.http.get(`${this.url}/findimg/${userId}`).toPromise();
  }

  //--------------------  Modification des informations de l'utilisateur --------------------------//
  async updateUser(user: any, userId: number) {

    return await this.http.patch(`${this.url}/update/${userId}`, user).toPromise();
  }

  //------------------------- Changement de la photo de l'utilisateur ----------------------------//
  async changeUserPicture(userId: number, avatarObj: any) {

    return await this.http.patch(`${this.url}/updateimg/${userId}`, avatarObj).toPromise();
  }

  //--------------------  Creation d'un compte (S'enregistrer) -------------------------------------//
  async createUser(people: any) {
    
    return await this.http.put(`${this.url}/register`, people).toPromise();
  }

  //--------------------  Supprission du compte utilisateur ---------------------------------------//
  async deleteUser(userId: number) {
    return await this.http.delete(`${this.url}/delete/${userId}`).toPromise();
  }

  //-------------------------  Verification de la connexion ------------------------------------//
  authentificationRole() {
    let user: any = localStorage.getItem('user');

    let userInfos: any = JSON.parse(user);

    //selon les infos de l'objet, on definit le role
    if (userInfos == null) {
      return 'any'; // personne n'est connecté
    } else {
      let isLunchLady = userInfos.isLunchLady;

      if (isLunchLady == false) {
        return 'user'; // utilisateur connecté
      } else {
        return 'cantiniere'; // continiere connecté
      }
    }
  }
}
