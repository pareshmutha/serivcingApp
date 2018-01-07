import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { JobcloserPage } from './jobcloser';

@NgModule({
  declarations: [
    JobcloserPage,
  ],
  imports: [
    IonicPageModule.forChild(JobcloserPage),
    TranslateModule.forChild()
  ],
  exports: [
    JobcloserPage
  ]
})
export class JobcloserPageModule { }
