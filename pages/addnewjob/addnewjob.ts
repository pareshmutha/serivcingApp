import { Component, NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-addnewjob',
  templateUrl: 'addnewjob.html'
})
export class AddnewjobPage {
   jobAreaShown = null;
   otherService:string = "";
  
  jobcloserlist:any[]=[
    {"id":"A2145","name":"Arjun Shukla","address":"Nal Stop, Kothrud","mobilenumber":"9876543210","vehicle":"Splendor MH14-DE-1763","isSupervised":"true"},
    {"id":"A2145","name":"Manoj D.","address":"Navi Sangavi, Pune","mobilenumber":"9876543210","vehicle":"Pulsar MH14-DE-1256","isSupervised":"true"},
    {"id":"A2146","name":"Hemant Thakare","address":"Deccan, Pune","mobilenumber":"9876543210","vehicle":"Activa MH12-AF-1390","isSupervised":"false"},
    {"id":"A2147","name":"Vaibhav Joshi","address":"Nigdi, PCMC","mobilenumber":"9876543210","vehicle":"CD100 MH14-AS-9876","isSupervised":"true"},

  ];
  serviceList:any[]=["Full Service","Break"]
  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    
  }
  toggleJobArea() {
    if (this.jobAreaShown) {
        this.jobAreaShown = null;
    } else {
        this.jobAreaShown = true;
    }
  };
  home(){
      this.navCtrl.push(MainPage);
  }
  addService(newService:string){
    if(newService){
      if(this.serviceList.indexOf(newService)===-1){
        this.serviceList.push(newService);
      }
    }
  }
  addOtherService(){
    if(this.otherService){
      if(this.serviceList.indexOf(this.otherService)===-1){
        this.serviceList.push(this.otherService);
      }
    }
    this.otherService="";
  }
  deleteService(service){
     if(this.serviceList.indexOf(service)>-1){
       this.serviceList.splice( this.serviceList.indexOf(service), 1 ); 
     }
  }
 
}
