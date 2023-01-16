import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/_interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  menus : Menu[];
  constructor(private menuService : MenuService) { }

  ngOnInit() {
    this.menuService.findAll().subscribe(data => {
      this.menus = data;
      console.log(this.menus);
    });
  }

}