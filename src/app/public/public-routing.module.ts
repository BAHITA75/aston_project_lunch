import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },

  { path: 'user', component: UserHomeComponent, canActivate:[AuthGuard], },
  { path: 'user/order/:userId', component: UserOrderComponent, canActivate:[AuthGuard], }, 
  { path: 'user/user-profile/:userId', component: UserProfileComponent, canActivate:[AuthGuard], },
  { path: 'user/user-update', component: UserUpdateComponent, canActivate:[AuthGuard],},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }