import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage, Signup, FirstRunPage, Profile } from '../pages';

@IonicPage()
@Component({
  selector: 'page-addchild',
  templateUrl: 'addchild.html'
})
export class AddChildPage implements OnInit{
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  
  // Our translated text strings
  private loginErrorString: string;
  public schoolList:any = [];
  public busLocations:any = [];
  public busList:any = [];
  public userId:string = '';

  

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }
  ngOnInit() {
    this.userId = this.user.userName;
    this.user.GetSchoolNames().subscribe((resp) => {
      this.schoolList = resp;
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  home(){
      this.navCtrl.push(MainPage);
  }
  logout(){
     this.navCtrl.push(FirstRunPage);
  }
  getBus(schoolname){
    this.user.GetBusDetails({"Name":schoolname}).subscribe((resp) => {
      this.busList = resp;
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  getStops(busname){
    this.user.GetBusRouteDetails({"Name":busname}).subscribe((resp) => {
      this.busLocations = resp;
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  newstudentregistration(studentObj){
    Object.keys(studentObj.value).forEach((key) => (studentObj.value[key] == null || studentObj.value[key] == "") && delete studentObj.value[key]);
    if(Object.keys(studentObj.value).length != 4){
      let toast = this.toastCtrl.create({
        message: "Please fill all values",
        duration: 3000,
        position: 'top'
      });
      toast.present();
      return;
    }
    studentObj.value['UserName'] = this.userId;
    this.user.newstudentregistration(studentObj.value).subscribe((resp) => {
      let toast = this.toastCtrl.create({
        message: resp["message"],
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.navCtrl.push(Profile);
      
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.navCtrl.push(Signup);

    });
  }
}
