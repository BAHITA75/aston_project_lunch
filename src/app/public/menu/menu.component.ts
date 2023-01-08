import { Meal } from '../../_model/meal';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../_services/menu-service';
import { Router } from '@angular/router';
import { Menu } from '../../_model/menu';
import { MealService } from '../../_services/meal-service';
import { ConstraintService } from '../../_services/constraint-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
 
  //-------------------- CONSTRUCTEUR ------------------------
  constructor(
    private menuService: MenuService,
    private router: Router,
    private mealService: MealService,
    private constraintService: ConstraintService
  ) {}
  //-------------------- ON INIT ------------------------
  ngOnInit(): void {
   
  }
}
