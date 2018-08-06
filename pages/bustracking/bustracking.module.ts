import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { BusTrackingPage } from './bustracking';

@NgModule({
  declarations: [
    BusTrackingPage,
  ],
  imports: [
    IonicPageModule.forChild(BusTrackingPage),
    TranslateModule.forChild()
  ],
  exports: [
    BusTrackingPage
  ]
})
export class BusLocationPageModule { }
