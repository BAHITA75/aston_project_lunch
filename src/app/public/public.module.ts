import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
