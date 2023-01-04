import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private TokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);

    const token = this.TokenService.getToken();
 
    // Si token à insérer dans le header
    if(token !== null){
      let clone = request.clone({
        headers: request.headers.set('Authorization', token)
      });

      console.log(clone);

      return next.handle(clone).pipe( // on recupère l'erreur quand on reçois la reponse

        catchError(error => {
          console.log(error);
          if(error.status === 401){ // si l'erreur de 401 (erreur d'authentification, le token est expiré)
            this.TokenService.clearTokenExpired(); // on suprimme le token actuel puis on redirge le user vers la page de connexion
          }
          return throwError('Session Expired');
        })
  
      );

    } else {
      return next.handle(request);
    } 
  }
}
// exports
export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true,
}
