import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from '@dashboard/tabs/tabs-routing.module';
import { TabsPage } from '@dashboard/tabs/tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
