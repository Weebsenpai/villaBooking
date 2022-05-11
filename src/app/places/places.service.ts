/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { Place } from './place.modle';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
      new Place(
        'p1',
        'Regalia Resort',
        'View of Heaven from our Balcony',
        'https://media-cdn.tripadvisor.com/media/photo-s/1c/83/76/eb/the-regalia-resort.jpg',
         6000
      ),
      new Place(
        'p2',
        'Caravela Resort',
        'Most Romantic Place.',
        // eslint-disable-next-line max-len
        'https://cf.bstatic.com/xdata/images/hotel/max1280x900/255742283.jpg?k=6009e7b97d982122786dbb5b2ea7be19cb112a0e9a34f8a4adb8bc81940dc2e1&o=&hp=1',
         9000
      ),
      new Place(
        'p3',
        'The Stone Wood Resort',
        'Touch your soul with soil',
        // eslint-disable-next-line max-len
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d5/9c/b8/stone-wood-nature-resort.jpg?w=900&h=-1&s=1',
         7000
      )
  ];

  getplaces(){
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }

  constructor() { }
  getPlaceById(id: string){
    // eslint-disable-next-line no-underscore-dangle
    return {...this._places.find(p => p.id === id)
    };
  }
}
