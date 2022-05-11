import { Component, OnInit } from '@angular/core';
import { Place } from '../place.modle';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
})
export class OfferPage implements OnInit {
  offeredPlaces: Place[];
  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.offeredPlaces = this.placeService.getplaces();
  }

}
