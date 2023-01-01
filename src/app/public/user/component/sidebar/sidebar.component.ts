import { TokenService } from './../../../../_services/auth/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private TokenService: TokenService) { }

  ngOnInit(): void {
  }
 
  // Deconnexion de l'utilisateur
  logout():void {
    this.TokenService.clearToken();
  }

}
