import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {
  
public lineChartType:string = 'line';
 public chartColors: Array<any> = [
    { // first color
      //[label color,]
      backgroundColor:["#23f3b1", "#23f3b1", "#23f3b1", "#23f3b1", "#23f3b1"] 
    }];

public lineChartData:Array<any> = [{data: [18, 48, 27, 39, 10, 27, 40,77,90,56,17,55,34], label: 'Business Stats'}];
public lineChartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July','Aug','Sept','Oct','Nov','Dec']; 
  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    
  }
  home(){
      this.navCtrl.push(MainPage);
  }
   private chartClicked(e: any): void {
      console.log(e);
  }

  private chartHovered(e: any): void {
      console.log(e);
  }
}
