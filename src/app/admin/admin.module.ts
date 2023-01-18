import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../_services/user-service';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from '../services/menu.service';
import { OrderComponent } from './order/order.component';
import { OrderService } from '../services/order.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    UserComponent,
    MenuComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [UserService, MenuService, OrderService],
})
export class AdminModule { }