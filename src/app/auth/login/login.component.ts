import { TokenService } from '../../_services/auth/token.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

interface ICredentials {
  email: string;
  password: string;
}

interface IToken {
  access_token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: ICredentials = {
    email: '',
    password: '',
  };

  jwt: any = '';
  user: any;
  isLunchLadyUncrypted: any;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
  ) {}

  ngOnInit(): void {}
  
  // Connexion
  onSubmit(): void {
    //console.log(this.form);
    this.authService.login(this.form).subscribe(
      (data) => {
        //console.log(data.headers.get('Authorization'));

        // Récupération du token
        this.jwt = data.headers.get('Authorization');

        // Décrypter le token
        let tokenUncrypte: any = jwt_decode(this.jwt);

        // stockage du token et de l'utilisateur
        this.tokenService.saveToken(this.jwt);
        localStorage.setItem('user', JSON.stringify(tokenUncrypte['user']));

        // Récupération de l'ID de l'utilisateur stocké dans le token
        this.user = localStorage.getItem('user');
        let userId = JSON.parse(this.user).id;

        // Récupération du role de l'utilisateur
        this.isLunchLadyUncrypted = localStorage.getItem('user');
        let isLunchLady = JSON.parse(this.isLunchLadyUncrypted).isLunchLady;

        // console.log(isLunchLady);
        // console.log(localStorage.getItem('user'));

        // redirection de l'utilisateur selon son role
        if (isLunchLady == false) {
          this.router.navigate(['/menu']);
          setTimeout(this.refreshPage, 1);
        } else {
          this.router.navigate(['/admin/home']);
          setTimeout(this.refreshPage, 1) ;
        }
      },
      (err) => console.log(err)
    );
  }
  //-------------------- Mot de passe oublié --------------------//
  resetPassword(){
    this.router.navigate(['auth/resetPassword']);
  }

  //-------------------- Création de compte --------------------//
  createAccount() {
    this.router.navigate(['auth/sign-up'])
  }

  // rafraichir la page
  refreshPage(){
    location.reload();
  }
}




