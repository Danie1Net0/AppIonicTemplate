import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoLoginGuard } from '@core/guards/auto-login.guard';
import { ConfirmRegistrationGuard } from '@auth/guards/confirm-registration.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(module => module.LoginPageModule),
        canLoad: [AutoLoginGuard]
      },
      {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then(module => module.RegisterPageModule)
      },
      {
        path: 'confirm-registration',
        loadChildren: () => import('./pages/confirm-registration/confirm-registration.module')
          .then(module => module.ConfirmRegistrationPageModule),
        canLoad: [ConfirmRegistrationGuard]
      },
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
