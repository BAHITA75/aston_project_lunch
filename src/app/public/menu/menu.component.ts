import { Meal } from '../../_interfaces/meal';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../_services/menu-service';
import { Router } from '@angular/router';
import { Menu } from '../../_interfaces/menu';
import { MealService } from '../../_services/meal-service';
import { ConstraintService } from '../../_services/constraint-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  days: any = [
    {
      id: 0,
      name: 'Lundi',
      date: '',
      plats: [],
      image64: [
        {
          idPlats: 0,
          image64: '',
        },
        {
          idPlats: 0,
          image64: '',
        },
      ],
    },
    {
      id: 1,
      name: 'Mardi',
      date: '',
      plats: [],
      image64: [
        {
          idPlats: 0,
          image64: '',
        },
        {
          idPlats: 0,
          image64: '',
        },
      ],
    },
    {
      id: 2,
      name: 'Mercredi',
      date: '',
      plats: [],
      image64: [
        {
          idPlats: 0,
          image64: '',
        },
        {
          idPlats: 0,
          image64: '',
        },
      ],
    },
    {
      id: 3,
      name: 'Jeudi',
      date: '',
      plats: [],
      image64: [
        {
          idPlats: 0,
          image64: '',
        },
        {
          idPlats: 0,
          image64: '',
        },
      ],
    },
    {
      id: 4,
      name: 'Vendredi',
      date: '',
      plats: [],
      image64: [
        {
          idPlats: 0,
          image64: '',
        },
        {
          idPlats: 0,
          image64: '',
        },
      ],
    },
  ];
  categories: any = [];
  isInsert: boolean = false;
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
      name: 'Plats Principaux',
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
  Meal!: Meal;
  Menu!: Menu;
  Menus: any;
  getCarte: any;
  getAllItem: any;
  platsTemp: any = [];
  plats: any = [];
  meal: any;
  today: any = '';
  todayHours: any = '';
  todayMinutes: any = '';
  maxMinutes: number = -1;
  maxHours: number = -1;

  //-------------------- CONSTRUCTEUR ------------------------
  constructor(
    private menuService: MenuService,
    private router: Router,
    private mealService: MealService,
    private constraintService: ConstraintService
  ) {}
  //-------------------- ON INIT ------------------------
  ngOnInit(): void {

    this.today = new Date().toISOString().substring(0, 10);

    //CHARGEMENT DES PLATS DU JOUR POUR LA SEMAINE
    this.onChargeWeekMenu();
    //CHARGEMENT DE LA CARTE POUR LA SEMAINE
    this.onChargeCarte();
  
  }

  //----------------------- CHARGEMENT DES PLATS DU JOUR POUR LA SEMAINE ACTUELLE ------------------------
  async onChargeWeekMenu() {
    try {
      //REQUETE AU SERVICE MENU
      this.Menus = await this.menuService.getWeekMenu();

      //Pour tout les menus de la semaine recuperés si le menu est un meal
      this.Menus.forEach((Menu: any) => {
        if (Menu.meals) {
          //Alors on tris et on reforme un array
          Menu.meals.forEach((meal: any) => {
            if (meal) {
              let tmp = meal;
              // ON PUSH TOUT LES PLATS RELIES AU MENU DANS UN TABLEAU TEMPORAIRE
              this.platsTemp.push(tmp);
            }
          });
        }
      });
  
    } catch (error: any) {
      console.log(error);
    }
  }
  //--------------------------- CHARGEMENT DE LA CARTE DES MEALS AVAILABLE FOR TODAY ----------------------
  async onChargeCarte() {
    //REQUETE ASYNCHRONE DE RECUPERATION DE LA CARTE DISPONIBLE POUR CE JOUR
    try {
      //REQUETE AU SERVICE MENU
      this.getCarte = await this.menuService.getCarte();
      //FOREACH DU RESULTAT POUR TRIER LES ELEMENTS DE LA CARTE PAR CATEGORIE
      this.getCarte.forEach((element: any) => {
        switch (element.category) {
          case 0:
            this.category0[0]['items'].push(element);
            break;
          case 1:
            this.category1[0]['items'].push(element);
            break;
          case 2:
            this.category2[0]['items'].push(element);
            break;
          case 3:
            this.category3[0]['items'].push(element);
            break;
          case 4:
            this.category4[0]['items'].push(element);
            break;
          case 5:
            this.category5[0]['items'].push(element);
            break;
          case 6:
            this.category6[0]['items'].push(element);
            break;
          case 7:
            this.category7[0]['items'].push(element);
            break;
          case 8:
            this.category8[0]['items'].push(element);
            break;
          case 9:
            this.category9[0]['items'].push(element);
            break;
          case 10:
            this.category10[0]['items'].push(element);
            break;
          case 11:
            this.category11[0]['items'].push(element);
            break;
        }
      });
      //AJOUT DES CATEGORIES DANS UN TABLEAU SI ELLES NE SONT PAS VIDES
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
