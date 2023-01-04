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

  redirectToUserProfile(): void {
    this.user = localStorage.getItem('user');
    let userId = JSON.parse(this.user).id;
    this.router.navigate(['user-profile/' + userId]);
  }

  // Deconnexion de l'utilisateur
  logout(): void {
    this.TokenService.clearToken();
  }

  // profileUser(id : any) {
  //   this.router.navigate(['user-profile/'+(id)]);
  // }
}
