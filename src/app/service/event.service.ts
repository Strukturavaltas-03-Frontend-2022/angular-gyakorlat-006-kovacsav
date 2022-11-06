import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventList: Event[] = [{
    name: 'Ez az a nap',
    date: '2022. 07. 23.',
    time: '14:00',
    location: {
      address: 'Puskás Aréna',
      city: 'Budapest',
      country: 'Magyarország'
    }
  },
  {
    name: 'Dics suli',
    date: '2022. 07. 25.',
    time: '09:00',
    location: {
      address: 'Lovarda',
      city: 'Debrecen',
      country: 'Magyarország'
    }
  },
  {
    name: 'Nyári ifi tábor',
    date: '2022. 08. 02.',
    time: '13:00',
    location: {
      address: 'Diósgyőri Gimnázium táborhelye',
      city: 'Balatonfenyves',
      country: 'Magyarország'
    }
  }
  ]

  constructor() { }

  getAll(): Event[] {
    return this.eventList
  }
}
