import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface ICredentials{
  email: string,
  password: string
};
interface IToken{
  access_token : string
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url = 'http://localhost:8080/stone.lunchtime';

  constructor(private http: HttpClient) { }
  

  //--------------------  Connexion ----------------------------------//
  login(credentials: ICredentials): Observable<HttpResponse<IToken> > {
    return this.http.post<IToken>(`${this.url}/login`, credentials, {observe: 'response'});
  }

  //--------------------  Mot de passe oublié ----------------------------------//
  async forgotPassword(resetPasswordForm : FormGroup){

    let url = this.url + "/forgotpassword?email=" + resetPasswordForm.value.email ;
    
    return await this.http.post(url,"", {observe : 'response'}).toPromise();
  }
}
