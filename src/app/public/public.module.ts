import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { SidebarComponent } from './user/component/sidebar/sidebar.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { UserInfosComponent } from './user/user-infos/user-infos.component';



@NgModule({
  declarations: [
    HomeComponent,
    UserHomeComponent,
    SidebarComponent,
    UserOrderComponent,
    UserInfosComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    AuthRoutingModule
  ]
})
export class PublicModule { }
