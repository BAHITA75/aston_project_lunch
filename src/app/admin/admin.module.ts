import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { OrderComponent } from './order/order.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';


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
    FormsModule,
    RouterModule,
  ],
})
export class AdminModule { }