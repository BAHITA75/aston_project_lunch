import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserInfosComponent } from './user/user-infos/user-infos.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { UserHomeComponent } from './user/user-home/user-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserHomeComponent },
  { path: 'user-order', component: UserOrderComponent },
  { path: 'user-infos', component: UserInfosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
