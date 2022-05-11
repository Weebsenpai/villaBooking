import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../booking/create-booking/create-booking.component';
import { Place } from '../../place.modle';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  // eslint-disable-next-line max-len
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private placeService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe( paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placeService.getPlaceById(paramMap.get('placeId'));
    });
  }
  onBookPlace(){
    //this.router.navigateByUrl('/place/tabs/discover');
    //this.navCtrl.navigateBack('/places/tabs/discover');
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace : this.place}
    })
    .then(m=>{
      m.present();
      return m.onDidDismiss();
    }).then(res => {
      console.log(res.data,res.role);
      if(res.role === 'confirm'){
        console.log('Booked!');
      }
    });
  }
}
