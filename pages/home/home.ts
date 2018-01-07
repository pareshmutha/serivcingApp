import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage, Jobcloser, Addnewjob, Services, Profile, VehicleHistory, Stats } from '../pages';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  routeToPage(pageRef){
    if(pageRef==='Jobcloser'){
     this.navCtrl.push(Jobcloser);
    }
    else if(pageRef==='Addnewjob'){
     this.navCtrl.push(Addnewjob);
    }
    else if(pageRef==='Services'){
     this.navCtrl.push(Services);
    }
    else if(pageRef==='Profile'){
     this.navCtrl.push(Profile);
    }
    else if(pageRef==='VehicleHistory'){
     this.navCtrl.push(VehicleHistory);
    }
    else if(pageRef==='Stats'){
     this.navCtrl.push(Stats);
    }
    
  }
  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
