import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(module => module.TabsPageModule)
      },
      {
        path: '',
        redirectTo: '/dashboard/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
