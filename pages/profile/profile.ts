import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController  } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage, FirstRunPage, AddChild } from '../pages';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  
  notificationtoggle:any=true;
  private userId:string = '';

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private alertCtrl: AlertController) {

    
  }
  ngOnInit() {
    this.userId = this.user.userName;
  }
  home(){
      this.navCtrl.push(MainPage);
  }
  addchild(){
    this.navCtrl.push(AddChild);
  }
  logout(){
     this.navCtrl.push(FirstRunPage);
  }
  changeNotification() {
    this.user.UpdateNotification({"username":this.userId,"updateProperty":this.notificationtoggle}).subscribe((resp) => {
       var msg = resp["message"] || "Updated successfully";
       this.showToast(msg);
    }, (err) => {
      this.showToast("Please try again.")
    });
  }
  changePassword() {
      let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'oldpassword',
          placeholder: 'Old Password',
          type: 'password'
        },
        {
          name: 'password',
          placeholder: 'New Password',
          type: 'password'
        },
        {
          name: 'confirmpassword',
          placeholder: 'Confirm Password',
          type: 'password'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Update',
          handler: data => {
            if(data.confirmpassword == "" || data.oldpassword == "" || data.password == ""){
              this.showToast("Please fill all values");
              return;
            }
            if(data.confirmpassword != data.password){
              this.showToast("Password and Confirm password does not match.");
              return;
            }
            this.user.UpdatePassword({"username":this.userId,"updateProperty":data.password}).subscribe((resp) => {
               var msg = resp["message"] || "Updated successfully";
               this.showToast(msg);
            }, (err) => {
              this.showToast("Please try again.")
            });
          }
        }
      ]
    });
    alert.present();
  }
  changeEmail() {
      let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'oldemail',
          placeholder: 'New Email address'
        },
        {
          name: 'email',
          placeholder: 'Confirm Email address',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Update',
          handler: data => {
              if(data.oldemail == "" || data.email == ""){
              this.showToast("Please fill all values");
              return;
            }
            if(data.oldemail != data.email){
              this.showToast("Mail and Confirm mail does not match.");
              return;
            }
            this.user.UpdateEmail({"username":this.userId,"updateProperty":data.email}).subscribe((resp) => {
               var msg = resp["message"] || "Updated successfully";
               this.showToast(msg);
            }, (err) => {
              this.showToast("Please try again.")
            });
          }
        }
      ]
    });
    alert.present();
  }
  writeUs() {
      let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'writeus',
          placeholder: 'Write Us',
          type:'textarea'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Update',
          handler: data => {
            if(data.writeus == ""){
              this.showToast("Please fill all values");
              return;
            }
            this.user.WriteUs({"username":this.userId,"updateProperty":data.writeus}).subscribe((resp) => {
               var msg = resp["message"] || "Sent successfully";
               this.showToast(msg);
            }, (err) => {
                this.showToast("Please try again.")
            });
          }
        }
      ]
    });
    alert.present();
  }
  contactUs() {
    let alert = this.alertCtrl.create({
      title: '<span class="contactTitle">SÉNA Corporation</span>',
      message:"<br/><span class='contatactTitle'>Texas</span><br/>Naresh Patel<br/>patelnp@sena-corp.com<br/>214-802-4982<br/><br/><span class='contatactTitle'>Puerto Rico</span><br/>Jose Rosado<br/>jrosado@sena-corp.com<br/>787-690-7257<br/><br/><span class='contatactTitle'>India</span><br/>Sagar Shinde<br/>sagars@sena-corp.com<br/>997-070-9922<br/><br/><span class='contatactTitle'>Bogota</span><br/>Alvaro Pineda<br/>alvaro@qutele.com<br/>301-238-0618<br/>",
      buttons: ['Dismiss']
    });
    alert.present();
  }
  showToast(msg){
    let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });
      toast.present();
  }
}
