import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoLoginGuard } from '@core/guards/auto-login.guard';
import { ConfirmRegistrationGuard } from '@auth/guards/confirm-registration.guard';
import { ResetPasswordGuard } from '@auth/guards/reset-password.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AutoLoginGuard],
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
        path: 'forgot-password',
        loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(module => module.ForgotPasswordPageModule)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./pages/reset-password/reset-password.module').then(module => module.ResetPasswordPageModule),
        canLoad: [ResetPasswordGuard]
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
