import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { VehicleHistoryPage } from './vehiclehistory';

@NgModule({
  declarations: [
    VehicleHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleHistoryPage),
    TranslateModule.forChild()
  ],
  exports: [
    VehicleHistoryPage
  ]
})
export class VehicleHistoryPageModule { }
