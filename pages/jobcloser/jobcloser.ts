import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-jobcloser',
  templateUrl: 'jobcloser.html'
})
export class JobcloserPage {
  
  jobcloserlist:any[]=[
    {"id":"A2145","name":"Arjun Shukla","address":"Nal Stop, Kothrud","mobilenumber":"9876543210","vehicle":"Splendor MH14-DE-1763","isSupervised":"true"},
    {"id":"A2145","name":"Manoj D.","address":"Navi Sangavi, Pune","mobilenumber":"9876543210","vehicle":"Pulsar MH14-DE-1256","isSupervised":"true"},
    {"id":"A2146","name":"Hemant Thakare","address":"Deccan, Pune","mobilenumber":"9876543210","vehicle":"Activa MH12-AF-1390","isSupervised":"false"},
    {"id":"A2147","name":"Vaibhav Joshi","address":"Nigdi, PCMC","mobilenumber":"9876543210","vehicle":"CD100 MH14-AS-9876","isSupervised":"true"},

  ];
  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    
  }
  home(){
      this.navCtrl.push(MainPage);
  }
 
}
