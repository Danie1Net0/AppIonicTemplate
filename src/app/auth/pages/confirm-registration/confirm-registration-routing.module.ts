import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmRegistrationPage } from '@auth/pages/confirm-registration/confirm-registration.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmRegistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmRegistrationPageRoutingModule {}
