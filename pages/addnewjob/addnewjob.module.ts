import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AddnewjobPage } from './addnewjob';

@NgModule({
  declarations: [
    AddnewjobPage,
  ],
  imports: [
    IonicPageModule.forChild(AddnewjobPage),
    TranslateModule.forChild()
  ],
  exports: [
    AddnewjobPage
  ]
})
export class AddnewjobPageModule { }
