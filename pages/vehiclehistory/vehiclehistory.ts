import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController  } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-vehiclehistory',
  templateUrl: 'vehiclehistory.html'
})
export class VehicleHistoryPage {
  
  historylist:any[]=[
    {"id":"A2145","name":"Arjun Shukla","address":"Nal Stop, Kothrud","mobilenumber":"9876543210","vehicle":"Splendor MH14-DE-1763","date":"08/11/2017","services":"Oil Change, Full Servicing"},
    {"id":"A2145","name":"Manoj D.","address":"Navi Sangavi, Pune","mobilenumber":"9876543210","vehicle":"Pulsar MH14-DE-1256","date":"01/08/2017","services":"Oil Change, Full Servicing"},
    {"id":"A2146","name":"Hemant Thakare","address":"Deccan, Pune","mobilenumber":"9876543210","vehicle":"Activa MH12-AF-1390","date":"11/10/2017","services":"Oil Change, Full Servicing"},
    {"id":"A2147","name":"Vaibhav Joshi","address":"Nigdi, PCMC","mobilenumber":"9876543210","vehicle":"CD100 MH14-AS-9876","date":"22/12/2017","services":"Oil Change, Full Servicing"},

  ];
  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public alertCtrl: AlertController) {

    
  }
  home(){
      this.navCtrl.push(MainPage);
  }
   showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Services Done',
      message:'<h5><ion-icon name="md-cog" class="listicon"></ion-icon><span>Full Service</span></h5><h5><ion-icon name="md-cog" class="listicon"></ion-icon><span>Oil Change</span></h5><h5><ion-icon name="md-cog" class="listicon"></ion-icon><span>Cost: 1020</span></h5>',
      buttons: ['OK']
    });
    alert.present();
  }
}
