import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { JobstatusPage } from './jobstatus';

@NgModule({
  declarations: [
    JobstatusPage,
  ],
  imports: [
    IonicPageModule.forChild(JobstatusPage),
    TranslateModule.forChild()
  ],
  exports: [
    JobstatusPage
  ]
})
export class JobstatusPageModule { }
