import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_services/auth/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  user: any;

  constructor(private TokenService: TokenService, private router: Router) {}

  ngOnInit(): void {}

  // Traitement de la modification de l'utilisateur conneté
  updateUser(): void {
    // Redirection vers le composant user-update
    this.router.navigate(['user/user-update']);
  }

  userOrder() {
    let UserfoLocal: any = localStorage.getItem('user');

    //Si l'objet local n'est pas null alors on recupere l'ID de l'utilisateur
    if (UserfoLocal != null) {
      UserfoLocal = JSON.parse(UserfoLocal);
      let userId = UserfoLocal.id;
      this.router.navigate(['user/order/' + userId]);
    }
  }

  // Deconnexion de l'utilisateur
  logout(): void {
    this.TokenService.clearToken();
    this.router.navigate(['/menu']);
    setTimeout(this.refresh, 1);
  }
  // rafraichir la page
  refresh() {
    location.reload();
  }

  // profileUser(id : any) {
  //   this.router.navigate(['user/user-profile/'+(id)]);
  // }
}
