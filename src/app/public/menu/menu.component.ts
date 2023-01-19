import { Meal } from '../../_interfaces/meal';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../_services/menu-service';
import { Img } from 'src/app/_interfaces/img';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menus: any;
  carte: any;
  plats: any = [];
  image: Img;
  img: any;

  categories: any = [];
  category0: any = [
    {
      id: 0,
      name: 'Autres',
      items: [],
    },
  ];

  category1: any = [
    {
      id: 1,
      name: 'Apéritif',
      items: [],
    },
  ];

  category2: any = [
    {
      id: 2,
      name: 'Entrée',
      items: [],
    },
  ];

  category3: any = [
    {
      id: 3,
      name: 'Plats',
      items: [],
    },
  ];

  category4: any = [
    {
      id: 4,
      name: 'Les A-Cotés',
      items: [],
    },
  ];

  category5: any = [
    {
      id: 5,
      name: 'Les Desserts',
      items: [],
    },
  ];

  category6: any = [
    {
      id: 6,
      name: 'Brunchs et Dejeuners',
      items: [],
    },
  ];

  category7: any = [
    {
      id: 7,
      name: 'Soupes et Potages',
      items: [],
    },
  ];

  category8: any = [
    {
      id: 8,
      name: 'Sauce et Vinaigrettes',
      items: [],
    },
  ];

  category9: any = [
    {
      id: 9,
      name: 'Boissons et Cocktails',
      items: [],
    },
  ];

  category10: any = [
    {
      id: 10,
      name: 'Sandwichs',
      items: [],
    },
  ];

  category11: any = [
    {
      id: 11,
      name: 'Snacks',
      items: [],
    },
  ];

  constructor(
    private menuService: MenuService,
  ) {}

  ngOnInit(): void {

    // le menu de la semaine
    this.onChargeWeekMenu();
    // la carte de la semaine
    this.onChargeCarte();
    
  }

  async getImage(menuId: number) {
    let menuImageInfo: any = await this.menuService.getMenuImage(menuId);
    this.image = menuImageInfo['image64'];
  }

  //.......................... Récupérer les menu de la semaine.......................... //
  async onChargeWeekMenu() {
    try {
      //REQUETE AU SERVICE MENU
      this.menus = await this.menuService.getWeekMenu();

      console.log(this.menus);

      this.menus.forEach((menu: any) => {
         this.img = this.getImage(menu.id)
         console.log()
       });

    } catch (error: any) {
      console.log('menu week', error);
    }
  }

    //.......................... Récupérer la menu de la semaine.......................... //
  async onChargeCarte() {
    try {
      this.carte = await this.menuService.getCarte();

      // inserser les plats dans les categories correspondantes
      this.carte.forEach((item: any) => {
        switch (item.category) {
          case 0:
            this.category0[0]['items'].push(item);
            break;
          case 1:
            this.category1[0]['items'].push(item);
            break;
          case 2:
            this.category2[0]['items'].push(item);
            break;
          case 3:
            this.category3[0]['items'].push(item);
            break;
          case 4:
            this.category4[0]['items'].push(item);
            break;
          case 5:
            this.category5[0]['items'].push(item);
            break;
          case 6:
            this.category6[0]['items'].push(item);
            break;
          case 7:
            this.category7[0]['items'].push(item);
            break;
          case 8:
            this.category8[0]['items'].push(item);
            break;
          case 9:
            this.category9[0]['items'].push(item);
            break;
          case 10:
            this.category10[0]['items'].push(item);
            break;
          case 11:
            this.category11[0]['items'].push(item);
            break;
        }
      });

      //ajouter toutes les categories dans le tableau categories
      if (this.category0[0]['items'].length >= 1) {
        this.categories.push(this.category0);
      }
      if (this.category1[0]['items'].length >= 1) {
        this.categories.push(this.category1);
      }
      if (this.category2[0]['items'].length >= 1) {
        this.categories.push(this.category2);
      }
      if (this.category3[0]['items'].length >= 1) {
        this.categories.push(this.category3);
      }
      if (this.category4[0]['items'].length >= 1) {
        this.categories.push(this.category4);
      }
      if (this.category5[0]['items'].length >= 1) {
        this.categories.push(this.category5);
      }
      if (this.category6[0]['items'].length >= 1) {
        this.categories.push(this.category6);
      }
      if (this.category7[0]['items'].length >= 1) {
        this.categories.push(this.category7);
      }
      if (this.category8[0]['items'].length >= 1) {
        this.categories.push(this.category8);
      }
      if (this.category9[0]['items'].length >= 1) {
        this.categories.push(this.category9);
      }
      if (this.category10[0]['items'].length >= 1) {
        this.categories.push(this.category10);
      }
      if (this.category11[0]['items'].length >= 1) {
        this.categories.push(this.category11);
      }
    } catch (error: any) {
      console.log(error);
    }
  }
}
