import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { SidebarComponent } from './user/component/sidebar/sidebar.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../_services/user-service';

@NgModule({
  declarations: [
    HomeComponent,
    UserHomeComponent,
    SidebarComponent,
    UserOrderComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule,
  ],
  providers: [], //On fourni ainsi notre service au module
})
export class PublicModule {}
