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

  constructor(private http: HttpClient) {
    this.usersUrlUsers = 'http://localhost:8080/stone.lunchtime/user/findall';
    this.usersUrlImg = `http://localhost:8080/stone.lunchtime/user/findimg/`;
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
}
