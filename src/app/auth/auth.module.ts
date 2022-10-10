import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule

  ]
})
export class AuthModule { }
