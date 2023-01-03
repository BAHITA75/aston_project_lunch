import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'', loadChildren: () => import('./public/public.module')
      .then(m => m.PublicModule)
  },
  {
    path:'signin', loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
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
  {
    path:'admin', loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
