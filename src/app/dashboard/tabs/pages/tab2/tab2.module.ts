import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { Tab2PageRoutingModule } from '@dashboard/tabs/pages/tab2/tab2-routing.module';
import { Tab2Page } from '@dashboard/tabs/pages/tab2/tab2.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
