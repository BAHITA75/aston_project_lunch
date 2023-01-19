import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/_interfaces/menu';
import { MenuService } from 'src/app/_services/menu-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menus : Menu[];
  constructor(private menuService : MenuService) { }

  ngOnInit() {
    
  }
}
