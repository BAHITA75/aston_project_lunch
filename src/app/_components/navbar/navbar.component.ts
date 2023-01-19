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
  public user!: User;
  checkToken: any = '';
  checkTokenDecode: any = '';
  public result: any;
  public isConnect: Boolean = false;
  public isLunchLady: Boolean = false;
  userId: any = '';
  today: number = Date.now();

  //---------------------------- Constructeur --------------------------------
  constructor(
    private userService: UserService,
    private router: Router,
    private tokenService: TokenService
  ) {}
  //---------------------------- QUI EST CONNECTÉ --------------------------------
  whoIsConnect() {
    //Récuperation de l'authentification de la personne en cours
    this.result = this.userService.onVerifAuthentification();

    //Selon le resultat on assigne a isConnect et isLunchLady leur valeur
    switch (this.result) {
      case 0: // personne n'est connecté
        this.isConnect = false;
        this.isLunchLady = false;
        break;
      case 1: // user connecté
        this.isConnect = true;
        this.isLunchLady = false;
        break;
      case 2: // continiere connecté
        this.isConnect = true;
        this.isLunchLady = true;
        break;
    }

    //Redirection en cas de lunchlady
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
  //---------------------------- ON INIT --------------------------------
  ngOnInit(): void {
    this.whoIsConnect();
  }

  //---------------------------- ON LOG --------------------------------
  loggin() {
    this.router.navigate(['auth/login']);
  }

  // Deconnexion de l'utilisateur
  logout(): void {
    this.tokenService.clearToken();
    this.router.navigate(['/menu']);
  }
  //---------------------------- Refraiche de la page ---------------------------//
  refresh() {
    location.reload();
  }
}
