import { Injectable } from '@angular/core';
import { User } from '../_model/user';
import { Img } from '../_model/img';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrlUsers: string;
  private usersUrlImg: string;
  private url: string;
  private tokenItem:any = localStorage.getItem('token');

  constructor(private http: HttpClient) {
    this.usersUrlUsers = 'http://localhost:8080/stone.lunchtime/user/findall';
    this.usersUrlImg = `http://localhost:8080/stone.lunchtime/user/findimg/`;
    this.url = `http://localhost:8080/stone.lunchtime`;

  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrlUsers);
  }

  public findImg(userId: number): Observable<Img> {
    return this.http.get<Img>(this.usersUrlImg + userId);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrlUsers, user);
  }

  //--------------------- Recuperation les inforations d'un utilisateur -------------------------
  getUser$(id: number): Observable<User>{
    return this.http.get<User>(`${this.url}/user/find/${id}`);
  }

  //--------------------  RECUPERATION DES NFORMATIONS D'UN UTILISATEUR ----------------------------------------------
  async getUserInfos(userId:number){

    //FORMULATION HEADER
    // const headers = { 
    // 'Authorization': this.tokenItem ,
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'accept': 'application/json',
    // };
    
    //REQUETE API: recuperer l'utilisateur par son id
    return await this.http.get(`${this.url}/user/find/${userId}`).toPromise();
  }
}
