import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage, VideoHistory, FirstRunPage } from '../pages';
declare var google;
@IonicPage()
@Component({
  selector: 'page-bustracking',
  templateUrl: 'bustracking.html'
})
export class BusTrackingPage implements OnInit{
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  lat:string = "18.460452";
  long:string = "73.825308";
  busObj:any;
  userId:string;
  timeout:any;
  distanceBetween:string;
  constructor(public navCtrl: NavController, public user: User,  public toastCtrl: ToastController) {
    this.distanceBetween = "0";
  }
  ngOnInit() {
    this.userId = this.user.userId;
   }
  getBuslocation(){

    this.user.buslocation({"Name":this.userId}).subscribe((resp) => {
      this.busObj = resp;
      this.loadMap(this.busObj[0]);

    }, (err) => {
      let toast = this.toastCtrl.create({
        message: err,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  ionViewDidLoad(){
    var self = this;
    this.getBuslocation();
    this.timeout = setInterval(function(){
      self.getBuslocation();
    },10000);
  }
  ionViewDidLeave(){
    clearInterval(this.timeout);
  }
  home(){
     this.navCtrl.push(MainPage);
  }
  logout(){
     this.navCtrl.push(FirstRunPage);
  }
  calculateAndDisplayRoute(directionsService, directionsDisplay, origin, destination) {
        directionsService.route({
          origin: origin,
          destination: destination,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
  }
  calculateDistance(lat1:number,lat2:number,long1:number,long2:number){
    // lat1 = 18.5308225
    // lat2 = 18.6571325
    // long1 = 73.8474647
    // long2 = 73.7659068 
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((long1- long2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
    return ""+dis.toFixed(2);
  }
  loadMap(trackobj){
    if(trackobj.InOutTime == "OUT"){
      this.loadsinglemap(trackobj.Destination);
      this.distanceBetween = "0";
      return;
    }

    let posLat1 = trackobj.Destination.split(",")[0];
    let posLang1 = trackobj.Destination.split(",")[1];;
    let posLat2 = trackobj.Current_Position.split(",")[0];
    let posLang2 = trackobj.Current_Position.split(",")[1];
    this.distanceBetween = this.calculateDistance(parseFloat(posLat1), parseFloat(posLat2), parseFloat(posLang1), parseFloat(posLang2));
    if(trackobj){
      this.lat = posLat1;
      this.long = posLang1;
    }
    let latLng = new google.maps.LatLng(this.lat, this.long);
    let mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


    var marker = new google.maps.Marker({
      position: latLng,
      title: 'Bus Tracking',
      icon: { url : 'assets/img/bus_icon.png' }
    });
    directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute(directionsService, directionsDisplay, trackobj.Current_Position, trackobj.Destination);
    //marker.setMap(this.map);
 
  }
  durationBetweenPoints(){
    //https://maps.googleapis.com/maps/api/directions/json?origin=18.5308,73.8475&destination=18.6571,73.7659&key=AIzaSyAHa516UeptXFD0ZYqVOCBgVsR91fmX1dQ
  }
  loadsinglemap(latlong){
    if(latlong){
      this.lat = latlong.split(",")[0];
      this.long = latlong.split(",")[1];
    }
    let latLng = new google.maps.LatLng(this.lat, this.long);
    let mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


    var marker = new google.maps.Marker({
      position: latLng,
      title: 'Hello World!',
      icon: { url : 'assets/img/bus_icon.png' }
    });
    marker.setMap(this.map);
 
  }
}
