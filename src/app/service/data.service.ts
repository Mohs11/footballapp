import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Club } from '../modles/Clubs';

@Injectable()
export class DataService {
  clubs: Club[];
  data: Observable<any>;

  constructor() {

          this.clubs = [
            {
              logo: "content/img/Tottenham Hotspur.png",
              name:"Tottenham Hotspur",
              ground:"Wembley Stadium",
              location:"London",
              capacity: 90000,
              league:"Premier League",
              color: "Premier-League"
            }
          ];
}
   getClubs(): Observable<Club[]> {
     return of(this.clubs);
   }

  }
