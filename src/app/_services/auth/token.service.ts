import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveToken(token: string | any): void{
    localStorage.setItem('token', token);
    this.router.navigate(['']);
}

  isLogged(): boolean{
    const token = localStorage.getItem('token')
    console.log(token);
    return !! token;
  }
 
  // se servir pour la deconnexion: au moment du logout la methode clearToken() est appelée
  clearToken(): void{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.router.navigate(['auth'])
  }

  // on suprimme le token quand il sera expiré
  clearTokenExpired(): void{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.router.navigate(['auth'])
  }
 
  //on recupère le token de l'utilisateur connecté puis l'injecter dans l'intercepteur
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
