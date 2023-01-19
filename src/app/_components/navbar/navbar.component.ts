import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_interfaces/user';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_services/auth/token.service';
import { UserService } from 'src/app/_services/user-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  role: string;
  isConnect: Boolean = false;
  isLunchLady: Boolean = false;
  userId: any = '';

  //---------------------------- Constructeur --------------------------------
  constructor(
    private userService: UserService,
    private router: Router,
    private tokenService: TokenService
  ) {}
  
  //---------------------------- ON INIT --------------------------------
  ngOnInit(): void {
    this.whoIsConnect();
  }

  //---------------------------- qui est connecté--------------------------------
  whoIsConnect() {
    //Récuperation de l'authentification de la personne en cours
    this.role = this.userService.authentificationRole();

    //Selon le resultat on assigne a isConnect et isLunchLady leur valeur
    switch (this.role) {
      case 'any': // personne n'est connecté
        this.isConnect = false;
        this.isLunchLady = false;
        break;
      case 'user': // user connecté
        this.isConnect = true;
        this.isLunchLady = false;
        break;
      case 'cantiniere': // continiere connecté
        this.isConnect = true;
        this.isLunchLady = true;
        break;
    }

    //Redirection en cas cantiniere
    if (this.isConnect && this.isLunchLady) {
      this.router.navigate(['/']);
    }

    //Récuperation des informations de l'utilisateur avec l'item user en local storage
    let userLocal: any = localStorage.getItem('user');

    //Si l'objet local n'est pas null alors on recupere son coutenu
    if (userLocal != null) {
      userLocal = JSON.parse(userLocal);
      this.userId = userLocal.id;
    }
  }

  // ........................redirection vers la connexion........................//
  loggin() {
    this.router.navigate(['auth/login']);
  }

  // Deconnexion de l'utilisateur
  logout(): void {
    this.tokenService.clearToken();
    this.router.navigate(['/menu']);
  }
  //............................... rafraichir la page ...............................//
  refresh() {
    location.reload();
  }
}
