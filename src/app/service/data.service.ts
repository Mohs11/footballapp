import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Club } from '../modles/Clubs';

@Injectable()
export class DataService {

  constructor(private http: Http) {
}
   getClubs(): Observable<Club[]> {
     return this.http.get('app/data/clubs.json')
     .map(res => res.json().data)
   }
}
