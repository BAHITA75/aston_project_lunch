import { TokenService } from './../../../../_services/auth/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  user: any;

  constructor(private TokenService: TokenService, private router: Router) {}

  ngOnInit(): void {}

  // redirectToUserProfile(): void {
  //   this.user = localStorage.getItem('user');
  //   let userId = JSON.parse(this.user).id;
  //   this.router.navigate(['user/user-profile/' + userId]);
  // }
  
  // Traitement de la modification de l'utilisateur conneté
  updateUser(): void {
    // Redirection vers le composant user-update
    this.router.navigate(['user/user-update']); 
  }

  // Deconnexion de l'utilisateur
  logout(): void {
    this.TokenService.clearToken();
  }

  // profileUser(id : any) {
  //   this.router.navigate(['user/user-profile/'+(id)]);
  // }
}
