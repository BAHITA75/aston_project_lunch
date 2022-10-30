import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: SigninComponent},
  {path: 'user', component: UserComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
