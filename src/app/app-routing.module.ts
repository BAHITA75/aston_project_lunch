import { Page404Component } from './_page404/page404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule), canActivate:[AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path:'user', loadChildren: () => import('./public/public.module')
      .then(m => m.PublicModule)
  },
  {
    path:'user-order', loadChildren: () => import('./public/public.module')
      .then(m => m.PublicModule)
  },
  {
    path:'user-infos', loadChildren: () => import('./public/public.module')
      .then(m => m.PublicModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
