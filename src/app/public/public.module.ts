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
import { MenuComponent } from './menu/menu.component';
import { registerLocaleData } from '@angular/common'; //Gestion des dates Françaises
import localeFr from '@angular/common/locales/fr';
import { UserUpdateComponent } from './user/user-update/user-update.component'; //Gestion des dates Françaises
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localeFr, 'fr'); //Gestion des dates Françaises

@NgModule({
  declarations: [
    HomeComponent,
    UserHomeComponent,
    SidebarComponent,
    UserOrderComponent,
    UserProfileComponent,
    MenuComponent,
    UserUpdateComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [], //On fourni ainsi notre service au module
})
export class PublicModule {}
