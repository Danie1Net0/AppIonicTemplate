import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from '@dashboard/tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./pages/tab1/tab1.module').then(module => module.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./pages/tab2/tab2.module').then(module => module.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('./pages/tab3/tab3.module').then(module => module.Tab3PageModule)
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
export class TabsPageRoutingModule {}
