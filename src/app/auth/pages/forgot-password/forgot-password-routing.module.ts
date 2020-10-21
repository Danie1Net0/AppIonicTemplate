import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordPage } from '@auth/pages/forgot-password/forgot-password.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordPageRoutingModule {}
