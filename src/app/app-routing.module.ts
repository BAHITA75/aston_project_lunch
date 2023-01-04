import { ErrorComponent } from './_error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
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
