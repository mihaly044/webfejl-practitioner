import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DefaultAuthGuard } from './guards/default-auth.guard';
const routes: Routes = [
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/edit/edit.module').then(m => m.EditModule),
    canActivate: [DefaultAuthGuard]
  },
  {
    path: 'new',
    loadChildren: () => import('./pages/edit/edit.module').then(m => m.EditModule),
    canActivate: [DefaultAuthGuard]
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule),
    canActivate: [DefaultAuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
