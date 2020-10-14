import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from '@dashboard/tabs/pages/tab1/tab1-routing.module';
import { Tab1Page } from '@dashboard/tabs/pages/tab1/tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
